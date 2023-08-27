import React from 'react';
import "./info.scss";

export default function Info() {
    function click(){
        document.querySelector('.p').classList.toggle("open")
        }    
        return (
        <div className="info">   

      <div className="block1">
        <div className="big">
          <div className="h3">
            <h3>Ապագա Պլաններ</h3>  
          </div>

        <div className="p">
          <div className="for_p">
          <p>Մեր նպատակն է IT ոլորտը զարգացնել մարզերում, և այդ ուղությամբ արդեն կատարել ենք հստակ քայլեր՝ մեր նոր մասնաճյուղը բացելով Վանաձորում։ Մարզերում նոր մասնաճյուղերը շատերի համար կստեղծի նոր հնարավորություններ։ Ցանկացողներին կընձեռնվի հնարավորություն՝ տանից ոչ հեռու ուսուցումը անցկացնելու համար, կարճ ժամանակահատվածում դառնալ պահանջված մասնագետ, գրագետ պորտֆոլիո:</p>
          </div>

        <div className="p1">
          <p>Դասընթացի ավարտից հետո պրակտիկայի հնարավորություն:</p>
        </div> 
      </div>

      <button className="btn" onClick={click}>
          Կարդալ Ավելին
      </button>
    </div>
  </div>

      <div className="block2">

        <div className="video"></div> 
      </div>
  </div>
  )
}
