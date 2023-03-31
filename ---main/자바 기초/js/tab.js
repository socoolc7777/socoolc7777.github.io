
function selecting(tab, pos, act) {
    $(tab).removeClass(act);
    $(tab).eq(pos).addClass(act);
}

// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function () {
//         selecting('.tab-button', i, 'orange');
//         selecting('.tab-content', i, 'show');
//     })
// }

$('.list').click(function (e) {
    selecting('.tab-button', e.target.dataset.id, 'orange');
    selecting('.tab-content', e.target.dataset.id, 'show');
})

var car = { name: '소나타', price: [50000, 3000, 4000] };

$('#tab-content-name2').html(car['name']);
$('#tab-content-price2').html(car['price'][0]);


function selectsize(e) {
    if (e.value == '모자') {
        $('#select-size option').eq(0).html(28);
        $('#select-size option').eq(1).html(30);  
    }
    else {
        $('#select-size option').eq(0).html(95);
        $('#select-size option').eq(1).html(100);
    }
}



// var sum=0;
// var mean;

// function 함수(array, score){
//     array.forEach((a) => {
//         sum+=a;
//     })
//     mean=sum/array.length;

//     if(mean > score) console.log(`${mean-score} 내려감`);
//     else if (mean < score) console.log(`${score-mean} 올라감`);
// }

// 함수([2,3,4], 10);