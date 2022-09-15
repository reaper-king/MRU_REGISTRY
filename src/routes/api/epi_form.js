import pool from '$lib/utils/pool'

export async function get({url}){

     let sample = url.searchParams.get('samp')
     let test = url.searchParams.get('test')
    let query = pool.query(`select 
                        labno,
                        patient_id,
                        names,
                        surname,
                        sex,
                        to_char(request_time,'YYYY-MM-DD') request_time,
                        p_age,
                        test_id,
                        sample,
                        card,
                        site,
                        ward,
                        epi_id,
                        P,
                        sf,
                        sentinnel ,
                        iso,
                        ili ,
                        sari ,
                        vtm ,
                        amies ,
                        sputum ,
                        hadj_pilgrim ,
                        spilt ,
                        unlabelled ,
                        e_sample,
                        other_sample_type ,
                        process ,
                        symptoms ,
                        other_symptoms ,
                        medical_conditions ,
                        travel_history ,
                        vaccinated::boolean vaccinated,
                        date_vacc ,
                        results ,
                        results_value ,
                        exist,
                        rapid_test,
                        dose,
                        vaccine_type,
                        pcr,
                        "case",
                        n_gene,
                        e_gene
                        from registry.epi_v ev 

                        where sample::int = '${sample}'::int
                        and
                        test_id::int = '${test}'::int
                        `)
return{
    body:  (await query).rows
}

}
