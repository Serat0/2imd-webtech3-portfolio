class Weather {
    constructor(){
        this.getLocation();
        this.latitude;
        this.longitude;
    }
    
    getLocation(){
       navigator.geolocation.getCurrentPosition(
           this.gotlocation.bind(this), 
           this.errorlocation.bind(this));
    }

    gotlocation(result){
        this.latitude = result.coords.latitude;
        this.longitude = result.coords.longitude; 
        this.getWeather();   
        console.log(this.latitude);
        console.log(this.longitude);
    }

    getWeather(){
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c25b51be5ae38894fa4e9acdef968a63/51.009945599999995,4.6989312?units=si`;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                document.querySelector(".summary").innerHTML = 
                    data.currently.summary;
                document.querySelector(".temp").innerHTML = 
                    data.currently.temperature + " Degrees";
            })
            .catch(err=> {
                console.log(err);
            })
    }

    errorlocation(err){
        console.log(err);
        
    }
}

let weather = new Weather();