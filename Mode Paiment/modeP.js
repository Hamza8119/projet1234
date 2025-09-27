 function pay(method) {
      let payement = document.getElementById("payement");
     let b1 = document.getElementById("b1");
     let b2 = document.getElementById("b2");
     
      if (method === 1) { // Paiement à la livraison
        b1.style.background = "#e9f5ff";
        b1.style.borderColor = "#007bff";
        b2.style.background = "white";
        b2.style.borderColor = "#ccc";
        payement.innerHTML = `   
        <div class="form-group"> 
        <label for="ville">ville :</label>
         <select class="form-input" name="ville" id="ville">
           <option value="casablanca">casablanca</option>
           <option value="rabat">rabat</option>
           <option value="marrakech">marrakech</option>
           <option value="tanger">tanger</option>
            <option value="agadir">agadir</option>
          </select>
          <label class="form-label" for="adresse">adresse :</label>
          <input class="form-input" type="text" id="adresse" name="adresse" placeholder="votre adresse">
          <label class="form-label" for="postal">code postal :</label>
          <input class="form-input" type="text" id="postal" name="postal" placeholder="code postal">
          <label class="form-label" for="phone">phone :</label>
          <input class="form-input" type="text" id="phone" name="phone" maxlength="10" placeholder="votre numero de telephone">
          </div> 
        <a href="comande.html" onclick="return verifier()" target="_blank"><button class="btn-pay">Confirmer la commande</button></a>
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
             <div class="form-group"> 
        <label for="ville">ville :</label>
         <select class="form-input" name="ville" id="ville">
           <option value="casablanca">casablanca</option>
           <option value="rabat">rabat</option>
           <option value="marrakech">marrakech</option>
           <option value="tanger">tanger</option>
            <option value="agadir">agadir</option>
          </select>
          <label class="form-label" for="adresse">adresse :</label>
          <input class="form-input" type="text" id="adresse" name="adresse" placeholder="votre adresse">
          <label class="form-label" for="postal">code postal :</label>
          <input class="form-input" type="text" id="postal" name="postal" placeholder="code postal">
          <label class="form-label" for="phone">phone :</label>
          <input class="form-input" type="text" id="phone" name="phone" maxlength="10" placeholder="votre numero de telephone">
          </div> 
            
      
        
            <button onclick="return verifier()" class="btn-pay">Payer</button>
            
          
            
          </div>
        `;
       
        
       
      }
     }