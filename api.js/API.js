var Home = document.getElementById('Home')
var concat = document.getElementById('concat')
var contactPage = document.querySelector('.contactPage')
var homePage =document.querySelector('.homePage')
var HomePartTow = document.getElementById('HomePartTow')

if(HomePartTow){
    HomePartTow.addEventListener('click', function(){
        homePage.classList.remove("d-none" );

        contactPage.classList.add("d-none");

    })
}

if(Home){
    Home.addEventListener('click', function(){
        homePage.classList.remove("d-none" );

        contactPage.classList.add("d-none");

    })
}
if(concat){
    concat.addEventListener('click', function(){
        homePage.classList.add("d-none");
        contactPage.classList.remove("d-none");

    })
}
async function weather(a){
    var t = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=711afa1f3fb247e8b2425806242906&q=${a}&days=3`);
   
        var a = await t.json();
        displayCurrent(a.location, a.current),
        displayAnother(a.forecast.forecastday)
    // console.log(a);
        
    }
    document.getElementById("search").addEventListener("keyup", a=>{
            weather(a.target.value)
        }
        );
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function displayCurrent(a,t){
    if(null != t){
        var e = new Date(t.last_updated.replace(" ", "T"));
        var n = `<div class="dayOne col-md-4">
								<div class="m-auto pt-2 px-4 header d-flex justify-content-between align-items-center ">
									 <h6>${days[e.getDay()]}</h6>
									 <h6>${e.getDate() + monthNames[e.getMonth()]}</h6>

								</div>
							
								<div class="py-3 ps-3">
									<h5 class="pb-3"> ${a.name} </h5>
									<h1 class="pb-3"> ${t.temp_c} </h1>
									<img src="https:${t.condition.icon}" alt="" class="pb-3">
									<h6 class="text-info"> ${t.condition.text}</h6>
									<div class="pt-2 px-3 d-flex justify-content-between align-items-center">

									
									<span class="">

										<img src="img/img2.png" alt="">
										<span>20%</span>
									</span>
									<span class="">

										<img src="img/img2.png" alt="">
										<span>18km/h</span>
									</span>
									<span class="">

										<img src="img/img3.png" alt="">
										<span>East</span>
									</span>
								</div>
								</div>
							
							</div>`;
                            document.getElementById("forecast").innerHTML = n
    }

}
function displayAnother(a){
    let t= '';
    for(let e = 1; e < a.length; e++)
        t+= `<div class="daytow  col-md-4">
								<div class="m-auto pt-2 header d-flex justify-content-center align-items-center ">
									 <h6>${days[new Date(a[e].date.replace(" ", "T")).getDay()]}</h6>
									 

								</div>
							
							<div class="text-center pt-5">
								<img src="https:${a[e].day.condition.icon}" class="py-2" alt="">
								<h5 class="-2">${a[e].day.maxtemp_c}</h5>
								<span >${a[e].day.mintemp_c}</span>
								<h6 class="text-info py-5">${a[e].day.condition.text}</h6>
							</div>
							</div>
							`
                            document.getElementById("forecast").innerHTML += t
}
weather("cairo");
