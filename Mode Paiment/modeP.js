 function pay(method) {
      let payement = document.getElementById("payement");
     let b1 = document.getElementById("b1");
     let b2 = document.getElementById("b2");
     
      if (method === 1) { // Paiement à la livraison
        b1.style.background = "#e9f5ff";
        b1.style.borderColor = "#007bff";
        b2.style.background = "white";
        b2.style.borderColor = "#ccc";
        payement.innerHTML = `Vous avez choisi le paiement à la livraison.
        <a href="comande.html" onclick=" target="_blank"><button class="btn-pay">Confirmer la commande</button></a>
        `;
      } else { // Paiement par carte
            b2.style.background = "#e9f5ff";
            b2.style.borderColor = "#007bff";
            b1.style.background = "white";
            b1.style.borderColor = "#ccc";
        payement.innerHTML = `

          <div>
            <div class="form-group">
              <label class="form-label" for="cardNumber">Numéro de carte :</label>
              <input id="cardNumber" type="tel" maxlength="19" class="form-input" placeholder="0000 0000 0000 0000"

      
                oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1 ').trim();"> 
            </div>

            <div class="form-inline">
              <div class="form-group" style="flex:1;">
                <label class="form-label" for="expiryDate">Date d'expiration :</label>
                <input id="expiryDate" type="text" maxlength="5" class="form-input" placeholder="MM/AA"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(.{2})/, '$1/').trim();">
              </div>

              <div class="form-group" style="flex:1;">
                <label class="form-label" for="cvv">CVV :</label>
                <input id="cvv" type="tel" maxlength="3" class="form-input" placeholder="123"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '');">
              </div>
            </div>

            <a href="comande.html" onclick="return verifier()" target="_blank"><button class="btn-pay">Payer</button></a>
            <script>
            function verifier(){
            let cardNumber = document.getElementById("cardNumber").value;
            let expiryDate = document.getElementById("expiryDate").value;
            let cvv = document.getElementById("cvv").value;
           
          
          </script>
          </div>
        `;
       
        
       
      }
     }
