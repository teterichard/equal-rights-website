/* phrases education */
var factListEducation = [ 
  "Women are paid less than men. Women earn 77 per cent of what men earn, though these figures understate the real extent of gender pay gaps, particularly in developing countries where informal self-employment is prevalent.", 
  "Women bear disproportionate responsibility for unpaid care and domestic work. Women tend to spend around 2.5 times more time on unpaid care and domestic work than men. The amount of time devoted to unpaid care work is negatively correlated with female labour force participation. It is estimated that if women’s unpaid work were assigned a monetary value, it would constitute between 10 per cent and 39 per cent of GDP.", 
  "Latina, Black, and Indigenous women represent less than 10% of women in the STEM workforce.",
  "Globally, only 32% of all national parliamentarians are female. That's more than double the number it was in 1995, but still slow change ",
  "Women currently account for only 4.8% of CEO positions at the top 500 companies in the world.",
  "In the US, on average women earn 80% of what white men are paid—and different groups of women experience very different gaps in pay.",
  "One in five women on US college campuses have experienced sexual assault.",
  "Over 2.7 billion women are legally restricted from having the same choice of jobs as men. Of 189 economies assessed in 2018, 104 economies still have laws preventing women from working in specific jobs, 59 economies have no laws on sexual harassment in the workplace, and in 18 economies, husbands can legally prevent their wives from working."
];

/* phrases GBV */
var factListGBV = [
  "The COVID-19 lockdown further caused domestic violence to increase in many countries. Cases of domestic violence have increased by 30% in some countries.", 
  "12 million girls worldwide are subjected to child marriage annually.", 
  "1 in 3 girls aged 15-19 have experienced some form of female genital mutilation/cutting in the 30 countries in Africa and the Middle East, where the harmful practice is most common with a high risk of prolonged bleeding, infection (including HIV), childbirth complications, infertility and death. At least 200 million girls and women worldwide have undergone female genital mutilation.", 
  "One in five women in the United States experienced completed or attempted rape during their lifetime.",
  "Only 52 per cent of women married or in a union freely make their own decisions about sexual relations, contraceptive use and health care.",
  "2020 saw a woman or girl being killed by someone in their family/partner every 11 minutes."
];

/* gen education */
var factEducation = document.getElementById("factEducation");
var factBtnEducation = document.getElementById("factBtnEducation");
var count = 0;

if (factBtnEducation) {
  factBtnEducation.addEventListener("click", displayFactEducation);
}

function displayFactEducation() {
  factEducation.innerHTML = factListEducation[count];
  count++;
  if (count == factListEducation.length) {
    count = 0;
  }
}

/* gen GBV */
var factGBV = document.getElementById("factGBV");
var factBtnGBV = document.getElementById("factBtnGBV");
var count = 0; 

if (factBtnGBV) {
  factBtnGBV.addEventListener("click", displayFactGBV);
}

function displayFactGBV() {
  factGBV.innerHTML = factListGBV[count];
  count++;
  if (count == factListGBV.length) {
    count = 0;
  }
}