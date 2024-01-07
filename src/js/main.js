import $ from './lib/lib';
// $('.active').on('click', sayHello );
// $('button').on('click', function() {
    // $(this).toggleAttribute("disable");
    // $('div').eq(2).toggleClass('active');
  
// });
// console.log($('button').html('hello'));
// $('div').click(function() {
//     console.log($(this).index());
// });
// console.log($('div').eq(2).find('.more')); 
// console.log($('.some').closest('.findme').addClass('dddddddd'));
// $('button').gasRight(3000, setInterval(() => $('button').gasRight(3000),1000 ) );
// $('textarea').on('click', function() {
//     // $('textarea').gasRight(3000, setInterval(() => $('textarea').gasRight(3000),3200 ) );
//     $('textarea').gasRight(3000);
// });
// $('button').gasRight(2000);
// console.log($('.more').eq(0).siblings());

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});
$('.wrap').html(
    `<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
</div>`
);
$('.dropdown-toggle').dropdown();
// $('[data-count="second"]').on('click', () => {
//     $('div').eq(2).fadeToggle(800);
// });
// $('button').eq(2).on('click', () => {
//     $('.w-500').fadeToggle(800); 
// });

$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totam aperiam dignissimos obcaecati corrupti aut animi illo dolor explicabo autem fugit, sunt culpa quibusdam nam sint est corporis quaerat non.'
        },
        btns: {
            count: 3, 
            settings: [
                [
                    'close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('данные сохранены');
                    }
                ],
                [
                    'Another btn',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('hello world');
                    }
                ]
            ]
        }
    });
})