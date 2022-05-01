<template>

<div class="spacing"></div>
  <div class="btn" v-if="!this.account">
    <a style="cursor: pointer;" id="main_btn" data-w-id="90938557-2145-6d02-cf2b-1567fa011889" class="main-button control-panel w-inline-block" @click="connect">
      <div class="main-button-content">
        <div class="btn_stroke_wrapper">
          <div style="opacity:1" class="btn_dot"></div>
          <div class="btn_text">Connect</div>
          <div style="opacity:1" class="btn_dot"></div>
        </div>
      </div>
      <div id="video" class="main-button-elements">
        <div class="btn_orange_element l"></div>
        <div class="btn_orange_element riverse"></div>
      </div>
    </a>
  </div>
<div class="spacing"></div>

<div id="GiveAway" class="form-container last control_panel" v-if="this.account">
  <h2 class="cp gv">Give away</h2>
  <h2 class="cp _1">Metaverse Trailer</h2>
  <div id="Roadmap" class="title-wrapper center primary">
    <h3>Single transaction</h3>
    <div class="small-subtitle"><strong class="bold-text-8">Send the NFT to the wallet you specified.</strong></div>
  </div>
  <div autocomplete="off" class="form center w-form">
    <div class="css-form-styling w-embed">
    </div>
    <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form-content">
      <div class="field">
        <div class="text-input custom st">
          <div class="html-field w-embed"><input class="custom-input" placeholder="Email" type="email" name="customEmail" id="customEmail" v-model="giveAwayAddress">
            <label class="floating-label" for="customEmail">Recipient's wallet</label>
          </div>
        </div>
      </div>
      <div class="field last">
        <div class="text-input custom sn">
          <div class="html-field w-embed"><input class="custom-input" type="number" placeholder="Job Title" name="customJob" id="customJob" v-model="giveAwayAmount">
            <label class="floating-label" for="customJob">Amount</label>
          </div>
        </div>
      </div>
    </form>
    <div class="w-form-done">
      <div>Thank you! Your submission has been received!</div>
    </div>
    <div class="w-form-fail">
      <div>Oops! Something went wrong while submitting the form.</div>
    </div>
  </div>
  <div class="btn">
    <a style="cursor: pointer;" id="main_btn" data-w-id="90938557-2145-6d02-cf2b-1567fa011889" class="main-button control-panel w-inline-block" @click="giveAway">
      <div class="main-button-content">
        <div class="btn_stroke_wrapper">
          <div style="opacity:1" class="btn_dot"></div>
          <div class="btn_text">Send</div>
          <div style="opacity:1" class="btn_dot"></div>
        </div>
      </div>
      <div id="video" class="main-button-elements">
        <div class="btn_orange_element l"></div>
        <div class="btn_orange_element riverse"></div>
      </div>
    </a>
  </div>
  <div id="Roadmap" class="title-wrapper center secondary">
    <h3>multiple transaction</h3>
    <div class="small-subtitle"><strong class="bold-text-8">Send the NFT to the multiple wallets.</strong></div>
  </div>

  <div class="btn">
    <input type="file"
       ref="file"
       :name="uploadFieldName"
       @change="onFileChange(
          $event.target.name, $event.target.files)"
       style="display:none">
    <a style="cursor: pointer;" id="main_btn" data-w-id="aff233ac-aa53-8d68-1940-2e0c0e3feccd" class="main-button s2 w-inline-block" @click="launchFileGiveAway()">
      <div class="main-button-content">
        <div class="btn_stroke_wrapper">
          <div style="opacity:1" class="btn_dot"></div>
          <div class="btn_text">Send multiple</div>
          <div style="opacity:1" class="btn_dot"></div>
        </div>
      </div>
          
      <div id="video" class="main-button-elements">
        <div class="btn_orange_element l"></div>
        <div class="btn_orange_element riverse"></div>
      </div>
    </a>
  </div>
  <div class="light control_panel"></div>
</div>

<div id="Contracts" class="form-container last control_panel team" v-if="this.account">
  <h2 class="cp">Contracts</h2>
  <div id="Roadmap" class="title-wrapper center secondary team contract">
    <h3>control console</h3>
    <div class="small-subtitle"><strong class="bold-text-8">Contract Function Management</strong></div>
  </div>
  
  <div class="toggle">
    <div class="small-subtitle"><strong class="bold-text-8">Sale status</strong></div>
    <div class="divcenter">
      <a style="cursor: pointer;" class="_w-divswitch w-inline-block" :class="{ activeField : saleStatus == true }" @click="changeSaleStatus">
        <div class="_w-divcolourswitch"></div>
        <div class="_w-switchbutton" :class="{ activeBTN : saleStatus == true }"></div>
      </a>
    </div>
  </div>
  <div class="sum">
    <div class="small-subtitle pricevalue"><strong class="bold-text-8">Current token price value</strong></div>
    <div class="small-subtitle pricevalue value"><strong class="bold-text-8 value">{{salePrice}}</strong></div>
  </div>
  <div autocomplete="off" class="form center w-form">
    <div class="css-form-styling w-embed">
    </div>
    <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form-content">
      <div class="field">
        <div class="text-input custom st">
          <div class="html-field w-embed"><input class="custom-input" placeholder="Email" type="email" name="customEmail" id="customEmail" v-model="newSalePrice">
            <label class="floating-label" for="customEmail">Set Sale price</label>
          </div>
        </div>
        <div class="small-subtitle contracts"><strong class="bold-text-8">Initiating the creation of tokens for the personal use of team members.</strong></div>
      </div>
      
    </form>
    <div class="w-form-done">
      <div>Thank you! Your submission has been received!</div>
    </div>
    <div class="w-form-fail">
      <div>Oops! Something went wrong while submitting the form.</div>
    </div>
  </div>
  <div class="btn">
    <a style="cursor: pointer;" id="main_btn" data-w-id="4213743e-dc38-bf64-eda8-89c5f21d4259" class="main-button s2 contracts w-inline-block" @click="setSalePrice">
      <div class="main-button-content">
        <div class="btn_stroke_wrapper">
          <div style="opacity:1" class="btn_dot"></div>
          <div class="btn_text">Send</div>
          <div style="opacity:1" class="btn_dot"></div>
        </div>
      </div>
      <div id="video" class="main-button-elements">
        <div class="btn_orange_element l"></div>
        <div class="btn_orange_element riverse"></div>
      </div>
    </a>
  </div>
  <div class="sum">
    <div class="small-subtitle pricevalue"><strong class="bold-text-8">Total number of sold tokens</strong></div>
    <div class="small-subtitle pricevalue value"><strong class="bold-text-8 value">{{ supplyTotal }}</strong></div>
  </div>
  <div class="toggle tolen">
    <div class="small-subtitle"><strong class="bold-text-8">Pre-Sale</strong></div>
    <div class="divcenter">
      <a style="cursor: pointer;" class="_w-divswitch w-inline-block" :class="{ activeField : preSaleStatus == true }" @click="changePreSaleStatus">
        <div class="_w-divcolourswitch"></div>
        <div class="_w-switchbutton" :class="{ activeBTN : preSaleStatus == true }"></div>
      </a>
    </div>
  </div>
  <div class="sum">
    <div class="small-subtitle pricevalue"><strong class="bold-text-8">Current Pre-Sale price</strong></div>
    <div class="small-subtitle pricevalue value"><strong class="bold-text-8 value">{{preSalePrice}}</strong></div>
  </div>
  <div autocomplete="off" class="form center presale w-form">
    <div class="css-form-styling w-embed">
    </div>
    <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form-content">
      <div class="field">
        <div class="text-input custom st">
          <div class="html-field w-embed"><input class="custom-input" placeholder="Email" type="email" name="customEmail" id="customEmail" v-model="newPreSalePrice">
            <label class="floating-label" for="customEmail">Set preSale price</label>
          </div>
        </div>
        <div class="small-subtitle contracts"><strong class="bold-text-8">Initiating the creation of tokens for the personal use of team members.</strong></div>
      </div>
  <div class="btn">
    <a style="cursor: pointer;" id="main_btn" data-w-id="90938557-2145-6d02-cf2b-1567fa011889" class="main-button control-panel w-inline-block" @click="setPreSalePrice">
      <div class="main-button-content">
        <div class="btn_stroke_wrapper">
          <div style="opacity:1" class="btn_dot"></div>
          <div class="btn_text">Send</div>
          <div style="opacity:1" class="btn_dot"></div>
        </div>
      </div>
      <div id="video" class="main-button-elements">
        <div class="btn_orange_element l"></div>
        <div class="btn_orange_element riverse"></div>
      </div>
    </a>
  </div>
    </form>
    <div class="w-form-done">
      <div>Thank you! Your submission has been received!</div>
    </div>
    <div class="w-form-fail">
      <div>Oops! Something went wrong while submitting the form.</div>
    </div>
  </div>
  <div class="sum presale total">
    <div class="small-subtitle pricevalue"><strong class="bold-text-8">Total number of tokens sold by Pre-Sale</strong></div>
    <div class="small-subtitle pricevalue value"><strong class="bold-text-8 value">{{preSaleSupply}}</strong></div>
  </div>
  <div class="light control_panel contracts"></div>
</div>
<div id="Pre-sale" class="form-container last control_panel team pre-sale" v-if="this.account">
  <h2 class="cp">Pre-sale list</h2>
  <div id="Roadmap" class="title-wrapper center secondary team">
    <h3>Pre - sale wallets list</h3>
    <div class="small-subtitle"><strong class="bold-text-8">Only the wallets listed in this list will participate in the Pre-Sale.</strong></div>
  </div>
  <div autocomplete="off" class="form center presale w-form">
    <div class="css-form-styling w-embed">
    </div>
    <form class="form-content">
      <div class="field">
        <div class="text-input custom st">
          <div class="html-field w-embed"><input class="custom-input" v-model="address">
            <label class="floating-label" for="customEmail">Wallet adress</label>
          </div>
        </div>
        <div class="small-subtitle contracts"><strong class="bold-text-8">Initiating the creation of tokens for the personal use of team members.</strong></div>
      </div>
    </form>
    <div class="w-form-done">
      <div>Thank you! Your submission has been received!</div>
    </div>
    <div class="w-form-fail">
      <div>Oops! Something went wrong while submitting the form.</div>
    </div>
  </div>
  <div class="btn">
    <a style="cursor: pointer;" id="main_btn" data-w-id="3304a222-01b0-0a02-5bd5-b11a0d9c942e" class="main-button s2 w-inline-block" @click="addAddress">
      <div class="main-button-content">
        <div class="btn_stroke_wrapper">
          <div style="opacity:1" class="btn_dot"></div>
          <div class="btn_text">Send</div>
          <div style="opacity:1" class="btn_dot"></div>
        </div>
      </div>
      <div id="video" class="main-button-elements">
        <div class="btn_orange_element l"></div>
        <div class="btn_orange_element riverse"></div>
      </div>
    </a>
  </div>
  Total: {{ length }}
  <div class="wallets_table presale_list w-container">
    <div class="table-wrapper _100 table">
      <div class="table-label">Wallets list</div>
      <div class="table no-pad overflow">
        <div class="table-row-5-col header presale_list">
          <div class="table-col">
            <div class="table-1---header---text">Wallet adress<span class="text-span-cite"></span></div>
          </div>
          <div class="table-col">
            <div class="table-1---header---text">Action<span class="text-span-cite"></span></div>
          </div>
        </div>
        
        <div class="table-row-5-col data-row presale_list" v-for="address in addresses">
          <div class="table-col">
            <div class="table-1---header---text data center">{{ address.address }}</div>
          </div>
          <div class="table-col">
            <div class="table-1---header---text data center list">1</div>
            <a class="table_btn w-button" @click="deleteAddress(address.id)">Remove</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
  input, textarea, [contenteditable] {caret-color: #6002ee;}
  .floating-label {pointer-events: none;}
  .custom-input:not(:placeholder-shown){
    padding-top: 1.5rem;
    padding-bottom: .5rem;
  }
  .custom-input:not(:placeholder-shown) + .floating-label {
    color: #6002ee;
    transform: scale(.75);
    top: .5rem;
  }
  .custom-input:not(:focus) + .floating-label {
    color: rgba(0,0,0,.6);
  }
  input, textarea, [contenteditable] {caret-color: #6002ee;}
  .floating-label {pointer-events: none;}
  .custom-input:not(:placeholder-shown){
    padding-top: 1.5rem;
    padding-bottom: .5rem;
  }
  .custom-input:not(:placeholder-shown) + .floating-label {
    color: #6002ee;
    transform: scale(.75);
    top: .5rem;
  }
  .custom-input:not(:focus) + .floating-label {
    color: rgba(0,0,0,.6);
  }
  input, textarea, [contenteditable] {caret-color: #6002ee;}
  .floating-label {pointer-events: none;}
  .custom-input:not(:placeholder-shown){
    padding-top: 1.5rem;
    padding-bottom: .5rem;
  }
  .custom-input:not(:placeholder-shown) + .floating-label {
    color: #6002ee;
    transform: scale(.75);
    top: .5rem;
  }
  .custom-input:not(:focus) + .floating-label {
    color: rgba(0,0,0,.6);
  }
  input, textarea, [contenteditable] {caret-color: #6002ee;}
  .floating-label {pointer-events: none;}
  .custom-input:not(:placeholder-shown){
    padding-top: 1.5rem;
    padding-bottom: .5rem;
  }
  .custom-input:not(:placeholder-shown) + .floating-label {
    color: #6002ee;
    transform: scale(.75);
    top: .5rem;
  }
  .custom-input:not(:focus) + .floating-label {
    color: rgba(0,0,0,.6);
  }
  input, textarea, [contenteditable] {caret-color: #6002ee;}
  .floating-label {pointer-events: none;}
  .custom-input:not(:placeholder-shown){
    padding-top: 1.5rem;
    padding-bottom: .5rem;
  }
  .custom-input:not(:placeholder-shown) + .floating-label {
    color: #6002ee;
    transform: scale(.75);
    top: .5rem;
  }
  .custom-input:not(:focus) + .floating-label {
    color: rgba(0,0,0,.6);
  }
  input, textarea, [contenteditable] {caret-color: #6002ee;}
  .floating-label {pointer-events: none;}
  .custom-input:not(:placeholder-shown){
    padding-top: 1.5rem;
    padding-bottom: .5rem;
  }
  .custom-input:not(:placeholder-shown) + .floating-label {
    color: #6002ee;
    transform: scale(.75);
    top: .5rem;
  }
  .custom-input:not(:focus) + .floating-label {
    color: rgba(0,0,0,.6);
  }
  input, textarea, [contenteditable] {caret-color: #6002ee;}
  .floating-label {pointer-events: none;}
  .custom-input:not(:placeholder-shown){
    padding-top: 1.5rem;
    padding-bottom: .5rem;
  }
  .custom-input:not(:placeholder-shown) + .floating-label {
    color: #6002ee;
    transform: scale(.75);
    top: .5rem;
  }
  .custom-input:not(:focus) + .floating-label {
    color: rgba(0,0,0,.6);
  }
  input,
  textarea,
  [contenteditable] {
    caret-color: #ED7D76;
  }
  .custom-input:not(:placeholder-shown){
    padding-top: 1.5rem;
    padding-bottom: .5rem;
  }
  .custom-input:not(:placeholder-shown) + .floating-label {
    color: #ED7D76;
    transform: scale(.75);
    top: .5rem;
  }
    .custom-input:not(:focus) + .floating-label {
    color: #cdc9d2;
  }
</style>

<script>

// import { reactive } from 'vue'
import whitelistCollection from '../firebase-config.js'
import { getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore/lite';

export default {
  data() {
    return {
      giveAwayAddress: null,
      giveAwayAmount: null,
      newSalePrice: null,
      newPreSalePrice: null,
      addresses: [],
      address: null,
      length: null
    }
  },
  methods: {
    async connect () {
      await this.$store.dispatch('connect', true)
    },
    async giveAway () {
      let giveAwayAddress = this.giveAwayAddress
      let giveAwayAmount = this.giveAwayAmount
      await this.$store.dispatch('giveAway', { giveAwayAddress, giveAwayAmount })
    },
    async changeSaleStatus () {
      await this.$store.dispatch('changeSaleStatus')
    },
    async changePreSaleStatus () {
      await this.$store.dispatch('changePreSaleStatus')
    },
    async setSalePrice () {
      let newSalePrice = this.newSalePrice
      await this.$store.dispatch('setSalePrice', { newSalePrice })
    },
    async setPreSalePrice () {
      let newPreSalePrice = this.newPreSalePrice
      await this.$store.dispatch('setPreSalePrice', { newPreSalePrice })
    },
    launchFileGiveAway(){
      this.$refs.file.click();
    },
    onFileChange(fieldName, file) {
      let excelFile = file[0] 
      console.log(excelFile)
      //check if user actually selected a file
      if (file.length>0) {
        if (!excelFile.type.match('text*')) {
          // check whether the upload is an image
          this.errorDialog = true
          this.errorText = 'Please choose an excel file'
          console.log("Error. Not excel")
        } else {
          // Append file into Data
          const reader = new FileReader();

        }
      }
    },

    async addAddress(){
      console.log("Adding address")
      const addedDoc = await addDoc(whitelistCollection, { address: this.address })
      console.log(addedDoc.id)
      this.addresses.splice(0)
      this.getWhitelist()
    },
    async getWhitelist() {
      let whitelist = await getDocs(whitelistCollection);
      whitelist.forEach(address => {
        let addressData = address.data()
        addressData.id = address.id
        this.addresses.push(addressData)
      })
      this.length = this.addresses.length
    },
    async deleteAddress(addressId) {
      let address = doc(whitelistCollection, addressId)
      if(confirm("Do you really want to delete?")){
        await deleteDoc(address)
        this.addresses.splice(0)
        this.getWhitelist()
      }
    }

  },
  created() {
    this.getWhitelist()
  },
	async mounted() {
    //await this.$store.dispatch("connect", false);
    await this.$store.dispatch("getTotalSupply");
    await this.$store.dispatch("getPreSaleSupply");
    await this.$store.dispatch("checkSaleStatus");
    await this.$store.dispatch("checkPreSaleStatus");
    await this.$store.dispatch("checkSalePrice");
    await this.$store.dispatch("checkPreSalePrice");

  },
  computed: {
    account() {
      return this.$store.getters.account;
    },
    supplyTotal() {
      return this.$store.getters.total;
    },
    preSaleSupply() {
      return this.$store.getters.preSaleSupply;
    },
    saleStatus() {
      return this.$store.getters.saleStatus;
    },
    preSaleStatus() {
      return this.$store.getters.preSaleStatus;
    },
    salePrice() {
      return this.$store.getters.salePrice;
    },
    preSalePrice() {
      return this.$store.getters.preSalePrice;
    },
  }
}
</script>