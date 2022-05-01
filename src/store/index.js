import { createStore } from 'vuex'
import { ethers } from 'ethers'
import ContractArtifact from "../utils/martians.json";
import axios from 'axios'

export default createStore({
  state: {
    account: null,
    error: null,
    total: null,
    preSaleSupply: null,
    saleStatus: null,
    preSaleStatus: null,
    salePrice: null,
    preSalePrice: null,
    contract_address: '0x3ec94144f121271aABFA18C0C00332f609f53cb4'
  },
  mutations: {
    setAccount (state, account) {
      state.account = account
    },
    setError (state, error) {
      state.error = error
    },
  },
  getters: {
    account: (state) => state.account,
    error: (state) => state.error,
    total: (state) => state.total,
    preSaleSupply: (state) => state.preSaleSupply,
    saleStatus: (state) => state.saleStatus,
    preSaleStatus: (state) => state.preSaleStatus,
    salePrice: (state) => state.salePrice,
    preSalePrice: (state) => state.preSalePrice,
  },
  actions: {
    async connect ({ commit, dispatch }, connect) {
      console.log("Trying to connect...")
      try {
        const { ethereum } = window
        console.log("Trying to connect Metamask.")
        if (!ethereum) {
          commit('setError', 'Metamask not installed!')
          return
        }
        if (!(await dispatch('checkIfConnected')) && connect) {
          await dispatch('requestAccess')
        }
        await dispatch('checkNetwork')
      } catch (error) {
        console.log(error)
        commit('setError', 'Account request refused.')
      }
    },
    async checkNetwork ({ commit, dispatch }) {
      const chainId = await ethereum.request({ method: 'eth_chainId' })
      const rinkebyChainId = '0x4'
      if (chainId !== rinkebyChainId) {
        if (!(await dispatch('switchNetwork'))) {
          commit(
            'setError',
            'You are not connected to the Rinkeby Test Network!'
          )
        }
      }
    },
    async switchNetwork () {
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4' }]
        })
        return 1
      } catch (switchError) {
        return 0
      }
    },
    async checkIfConnected ({ commit }) {
      const { ethereum } = window
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      if (accounts.length !== 0) {
        commit('setAccount', accounts[0])
        return 1
      } else {
        return 0
      }
    },
    async requestAccess ({ commit }) {
      const { ethereum } = window
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      })
      commit('setAccount', accounts[0])
    },
    async getContract({ state }) {
      try {
        const { ethereum } = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(
          state.contract_address,
          ContractArtifact.abi,
          signer
        );
        console.log(connectedContract);
        return connectedContract;
      } catch (error) {
        console.log(error);
        console.log("connected contract not found");
        return null;
      }
    },

    async getMountedContract({ state }) {
      try {
        let provider = ethers.getDefaultProvider("rinkeby");
        const mountedContract = new ethers.Contract(state.contract_address, ContractArtifact.abi, provider);
        return mountedContract;
      } catch(error) {
        console.log(error);
      }
    },

    async getTotalSupply({ state, dispatch }) {
      try {
        const contract = await dispatch('getMountedContract')

        let total = await contract.totalSupply();
        console.log(Number(total));
        state.total = Number(total);
      } catch (error) {
        console.log(error)
      }
    },
    async getPreSaleSupply({ state, dispatch }) {
      try {
        const contract = await dispatch('getMountedContract')

        let total = await contract.PreMintedSupply();
        console.log(Number(total));
        state.preSaleSupply = Number(total);
      } catch (error) {
        console.log(error)
      }
    },
    async checkSaleStatus({ state, commit, dispatch }) {
      try {
        const contract = await dispatch('getMountedContract')

        let status = await contract.SaleIsActive();
        state.saleStatus = status;
      } catch (error) {
        console.log(error)
      }
    },
    async checkSalePrice({ state, commit, dispatch }) {
      try {
        const contract = await dispatch('getMountedContract')

        let price = await contract.SalePrice();
        state.salePrice = ethers.utils.formatEther(price);
      } catch (error) {
        console.log(error)
      }
    },
    async checkPreSaleStatus({ state, commit, dispatch }) {
      try {
        const contract = await dispatch('getMountedContract')

        let status = await contract.PreSaleIsActive();
        state.preSaleStatus = status;
      } catch (error) {
        console.log(error)
      }
    },
    async checkPreSalePrice({ state, commit, dispatch }) {
      try {
        const contract = await dispatch('getMountedContract')

        let price = await contract.PreSalePrice();
        state.preSalePrice = ethers.utils.formatEther(price);
      } catch (error) {
        console.log(error)
      }
    },
    async changeSaleStatus({ state, commit, dispatch }) {
      try {
        const connectedContract = await dispatch("getContract");

        await connectedContract.ToggleSale();
        state.saleStatus = !state.saleStatus
      } catch (error) {
        console.log(error)
      }
    },
    async changePreSaleStatus({ state, commit, dispatch }) {
      try {
        const connectedContract = await dispatch("getContract");

        await connectedContract.TogglePreSale();
        state.preSaleStatus = !state.preSaleStatus
      } catch (error) {
        console.log(error)
      }
    },
    async setSalePrice({ state, commit, dispatch }, obj) {
      try {
        const connectedContract = await dispatch("getContract");
        let new_price = ethers.utils.parseEther(String(obj.newSalePrice))
        //console.log(new_price)
        await connectedContract.setSalePrice(new_price);
        state.salePrice = obj.newSalePrice
      } catch (error) {
        console.log(error)
      }
    },
    async setPreSalePrice({ state, commit, dispatch }, obj) {
      try {
        const connectedContract = await dispatch("getContract");
        let new_price = ethers.utils.parseEther(String(obj.newPreSalePrice))
        //console.log(new_price)
        await connectedContract.setPreSalePrice(new_price);
        state.preSalePrice = obj.newPreSalePrice
      } catch (error) {
        console.log(error)
      }
    },
    async giveAway({ state, commit, dispatch }, obj) {
      console.log('GiveAway tokens')
      try {
        const connectedContract = await dispatch("getContract");
        let address = obj.giveAwayAddress
        let amount = obj.giveAwayAmount
        const mintTxn = await connectedContract.giveAway(address, amount);
        await mintTxn.wait();
      } catch (error) {
        console.log(error);
      }
    },
    async addWhitelist({ state, commit, dispatch }, obj) {
      console.log('GiveAway tokens')
      try {
        //const connectedContract = await dispatch("getContract");
        let address = obj.giveAwayAddress
        ///const mintTxn = await connectedContract.giveAway(address, amount);
        //await mintTxn.wait();
      } catch (error) {
        console.log(error);
      }
    },
    async mintToken({ state, commit, dispatch }, obj) {
      console.log('Mint new token')
      try {
        const connectedContract = await dispatch("getContract");
        let price = await connectedContract.SalePrice();
        price = ethers.utils.formatEther(price)
        price = price * obj.amount
        const mintTxn = await connectedContract.mintMartian(obj.amount, { gasLimit: 1000000 , value: ethers.utils.parseEther(String(price))});
        await mintTxn.wait();
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})