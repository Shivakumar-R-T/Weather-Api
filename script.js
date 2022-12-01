//Enter the Access key token from 'Visual Crossing ' website

let lctn = document.querySelector('.loc');

let acsKey = document.querySelector('.acs-key');





function getData() {
    //Error handliing 'Starts' from here
    console.log(acsKey.value);
    let tabledata = ` <tr><td >Location : </td></tr>
<tr><td>Lat :  </td><td>Long : </td></tr>
<tr><td>Time Zone :</td><td>Condition :</td></tr>
<tr><td>Wind Speed :</td> <td>Description :</td></tr>
<tr><td>Pressure :</td></tr>
<tr><td>Humidity : </td></tr>
<tr><td>Wind Direction:</td></tr>
<tr><td>UV Index : </td></tr>
<tr><td>Feels Like : </td></tr>`;

    if (lctn.value === "" && acsKey.value === "") {
        document.querySelector('.err').innerHTML = `Location And Access Token can't be Empty`;
        document.querySelector('tbody').innerHTML = tabledata;
    }
    else if (lctn.value === "") {
        document.querySelector('.err').innerHTML = `Location  can't be Empty`;
        document.querySelector('tbody').innerHTML = tabledata;
    }
    else if (acsKey.value === "") {
        document.querySelector('.err').innerHTML = `Access Token can't be Empty`;
        document.querySelector('tbody').innerHTML = tabledata;
    }
    //'Ends' here

    else {

        // const api = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Karnataka?unitGroup=metric&key=W2W7RRXYV2KBZECC7Q4PJ2QX8&contentType=json';
        //my access-Key : W2W7RRXYV2KBZECC7Q4PJ2QX8
        const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lctn.value}?unitGroup=metric&key=${acsKey.value}&contentType=json`;
        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                console.log(data.address);



                tabledata = ` <tr>
    <td >Location : <span>${data.resolvedAddress}</span></td></tr>
<tr>
    <td>Lat : <span>${data.latitude}</span> </td>
    <td>Long : <span>${data.longitude}</span></td>
</tr>
<tr>
    <td>Time Zone :<span>${data.timezone}</span></td>
    <td>Condition :<span>${data.currentConditions.conditions}</span></td>

</tr>
<tr>
    <td>Wind Speed :<span>${data.currentConditions.windspeed} m/s</span></td>
    <td style="height:50px ;">Description : <span>${data.description}</span></td>
</tr>
<tr>
    <td>Pressure :<span>${data.currentConditions.pressure} hPa </span></td>
</tr>
<tr>
    <td>Humidity : <span>${data.currentConditions.humidity} g.m-3</span></td>
</tr>
<tr>
    <td>Wind Direction : <span>${data.currentConditions.winddir}</span></td>
</tr>

<tr>
    <td>UV Index : <span>${data.currentConditions.uvindex}</span></td>
</tr>
<tr>
    <td>Feels Like : <span>${data.currentConditions.feelslike} °C</span> </td>
</tr>`; 

                document.querySelector('tbody').innerHTML = tabledata;
                document.querySelector('.err').innerHTML = "";







            })
            .catch(() => {
                document.querySelector('.err').innerHTML = `The result is Not found  for Entered Value`;
                document.querySelector('tbody').innerHTML = tabledata;

            })
    }



}






