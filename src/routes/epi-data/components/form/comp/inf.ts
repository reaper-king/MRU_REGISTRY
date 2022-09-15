import { writable } from "svelte/store";
import moment from "moment";

export let form = writable({ id: 0,
     epiWk: 0, 
     dateReq: moment().format('yyyy-MM-DD'), 
     p:'',
     sf:'',
     sentinnel:'',
     iso:'',
     sex: '', 
     age: 0, 
     surname: '', 
     name:'',
     hospital:'',
     ward:'',
     card:'',
     age_group:'',
     ili:false, 
     sari:false, 
     vtm:false, 
     amies:false, 
     sputum:false, 
     hadj_pilgrim:false, 
     spilt:false, 
     unlablled:false, 
     sample:false, 
     other_samp:'',
     process:false,
     travel_history:'',
     symptoms: {
        urti:false ,
        cough:false,
        fever:false,
        puo:false,
        sore_throat:false,
        bronchitis:false ,
        chist_infection:false ,
        pneumonia:false
     },
     other_symptoms:'',
     medical_coditions:'',
     vaccinated:false ,
     vaccinated_date:'' ,
     results: {
      inf_a:false ,
      inf_b:false,
      sars_2cov:false,
      mers_cov:false,
      ah3:false,
      pdma:false ,
      b_yamagata:false ,
      b_victoria:false,
      rsv:false,
      adeno:false,
      ah5:false,
      ah7:false,
      ah9:false
     },
     result:'',
     comments:[{user:'',message:''}]
    })