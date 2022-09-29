const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for(const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover) /*над плейсхолдером куда мы можем поместить */
    placeholder.addEventListener('dragenter', dragenter) /*заходим на территорию */
    placeholder.addEventListener('dragleave', dragleave)/*перенесли, но вышли оттуда */
    placeholder.addEventListener('drop', drop)/*когда отпустили */
}

function dragstart(event){
    console.log('drag start', event.target);
    event.target.classList.add('hold')
    setTimeout(()=> event.target.classList.add('hide'), 0 )
}

function dragend(event){
    console.log('drag end');
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
}

function dragover(event){
    event.preventDefault()
    console.log('dragover');
}

function dragenter(event){
    event.target.classList.add('hovered')
    console.log('dragenter');
}

function dragleave(event){
    event.target.classList.remove('hovered')
    console.log('dragleave');
}

function drop(event){
    event.target.append(item)
    console.log('drop');
}