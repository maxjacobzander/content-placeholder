const header = document.getElementsById('header')
const title = document.getElementsById('title')
const excerpt = document.getElementsById('excerpt')
const profile_img = document.getElementsById('profile_img')
const name = document.getElementsById('name')
const date = document.getElementsById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

function getData() {
    header.innerHTML = '<img src="https://maxjacobzander.netlify.app/static/Adrians_Dream-295827e8117ffe4b20385798165f35cd.jpg" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, commodi!'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'June 6, 2021'
}