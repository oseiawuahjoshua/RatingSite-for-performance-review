const rates= document.querySelectorAll('.toggle-container label');
const submitbtn= document.querySelector('.submit-btn')
const finalrate= document.querySelector('.finalrate p')

let html='';
function generateRate(){
    rates.forEach(rate=>{
        rate.addEventListener('click', ()=>{
            html=`You selected ${rate.textContent} out of 5`
            console.log(html);
        })
    })

}
generateRate();

const sectionone= document.querySelector('.section-1')
const sectiontwo= document.querySelector('.section-2')

submitbtn.addEventListener('click', ()=>{
    sectiontwo.classList.remove('hidden')
    sectionone.classList.add('hidden')
    finalrate.textContent= html;


})



rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rate.classList.add('clicked');
  });
});
