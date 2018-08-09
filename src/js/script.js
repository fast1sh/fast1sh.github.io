var usd,
		uah;

function CBR_XML_Daily_Ru(rates) {
	
	usd = rates.Valute.USD.Value,
  uah = rates.Valute.UAH.Value;

}

function calc() {
	var balance = document.getElementById('balance').value,
			salary;

	salary = (balance - (balance / 100 * 13))* 0.4,
	ua = salary * uah,
	ru = salary * usd;
	document.getElementById('us').innerHTML = "$"+ salary.toFixed(0);
	document.getElementById('ua').innerHTML = ua.toFixed(0) + " грн.";
	document.getElementById('ru').innerHTML = ru.toFixed(0) + " руб.";
}