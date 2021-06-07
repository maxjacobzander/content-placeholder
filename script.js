const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://maxjacobzander.netlify.app/static/Adrians_Dream-295827e8117ffe4b20385798165f35cd.jpg" alt="" />'
    title.innerHTML = "Adrian's Dream"
    excerpt.innerHTML = 'A website for a small crafting business'
    profile_img.innerHTML = '<img src="https://static.wixstatic.com/media/b2c140_d6e7b1318122493b8faebfeb95af7c70~mv2_d_4480_6720_s_4_2.jpg/v1/fill/w_600,h_900,q_90/b2c140_d6e7b1318122493b8faebfeb95af7c70~mv2_d_4480_6720_s_4_2.jpg" alt="" />'
    name.innerHTML = 'Max Zander'
    date.innerHTML = 'June 6, 2021'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}