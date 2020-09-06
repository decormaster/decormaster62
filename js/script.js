$(document).ready(function(){
  $('.client-slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 720,
        settings: {
        slidesToShow: 1,
        arrows: false
        }
      }
    ]
  });
});

const popupTriggers = document.getElementsByClassName('popup-trigger');
const popupTarget = document.getElementById("popup");
const popupCloseButton = document.getElementById("service_popup_close");

const popupHeading = document.getElementById("popup_title");
const popupParagraph = document.getElementById("popup_description");

for (let i = 0; i < popupTriggers.length; i++) {
  popupTriggers[i].addEventListener('click', popupActivate);
}
popupCloseButton.addEventListener('click', popupClose);

document.getElementById('wallpaper-popup').addEventListener('click', popupWallpaper);
document.getElementById('painting-popup').addEventListener('click', popupPainting);
document.getElementById('plaster-popup').addEventListener('click', popupPlaster);
document.getElementById('putty-popup').addEventListener('click', popupPutty);
document.getElementById('linoleum-popup').addEventListener('click', popupLinoleum);
document.getElementById('electricity-popup').addEventListener('click', popupElectricity);
document.getElementById('ground-popup').addEventListener('click', popupGround);
document.getElementById('partition-popup').addEventListener('click', popupPartition);
document.getElementById('decor-plaster-popup').addEventListener('click', popupDecor);
document.getElementById('plumbing-popup').addEventListener('click', popupPlumbing);
document.getElementById('elements-popup').addEventListener('click', popupElements);



function popupActivate () {
  popupTarget.classList.add("open");
  particularServiceText();
};

function popupClose () {
  popupTarget.classList.remove('open');
};


function popupWallpaper(){
  popupHeading.textContent = 'Поклейка обоев';
  popupParagraph.textContent = 'Поклеим обои любых видов: флизелиновые, виниловые, бумажные и стеклообои. При необходимости, удалим старое покрытие, выравним и обработаем стены, чтобы обои держались на них как можно более крепко.';
}

function popupPainting(){
  popupHeading.textContent = 'Покраска обоев и стен';
  popupParagraph.textContent = 'После окрашивания вы получите прочные моющиеся обои с экологичным покрытием, устойчивые к влаге и выгоранию. Чаще всего для этого применяются специальные флизелиновые обои под покраску, виниловые, бумажные полотна или стеклообои. Желательно использовать материалы светлых оттенков. Покраска стен, в свою очередь, может быть более выгодна в случае, когда помещение предназначается для частого посещения большим количеством людей (общественные и офисные помещения) или если нужно подготовить квартиру к появлению домашнего животного.';
}

function popupPlaster(){
  popupHeading.textContent = 'Штукатурка';
  popupParagraph.textContent = 'Оштукатуривание стен позволяет получить ровную плоскость и исключить малейшие отклонения от горизонтали и вертикали. Кроме того, слой штукатурки, нанесенный на внешнюю сторону стен, служит дополнительной защитой стен от физических и климатических воздействий. Штукатурка необходима в том случае, если требуется подготовить стены для поклейки обоев или покраски - на ровной поверхности обои держаться лучше, а краска лежит ровно и не создает наплывов.';
}

function popupPutty(){
  popupHeading.textContent = 'Шпатлевка стен';
  popupParagraph.textContent = 'Шпатлевка позволяет сделать оштукатуренные стены более гладкими и прочными. Если штукатурка представляет собой относительно мягкий материал, предназначенный для выравнивания стен и заполнения полостей, то шпатлевка - значительно более твердый материал, который способен выдержать гораздо более высокие нагрузки.';
}

function popupLinoleum(){
  popupHeading.textContent = 'Укладка линолеума';
  popupParagraph.textContent = 'Линолеум - это практичное напольное покрытие, которое отличается своей невысокой ценой и простотой в уходе. Содержать в чистоте линолеум очень просто, так как в него не забиваются крошки и не впитывается грязь, а его установка требует меньших затрат ресурсов, чем любое другое напольное покрытие.';
}

function popupElectricity(){
  popupHeading.textContent = 'Электрика';
  popupParagraph.textContent = 'Качественно выполненная проводка - это залог не только бесперебойной работы техники, но и безопасности того или иного помещения. В работе с электричеством важно знание процесса и архитектуры электросети, чтобы избежать ошибок и возможных поломок оборудования. Наши мастера не только обеспечат вам безопасную и надежную сеть, но и сэкономят кучу времени - с опытом любая работа выполняется в разы быстрее.';
}

function popupGround(){
  popupHeading.textContent = 'Выравнивание пола';
  popupParagraph.textContent = 'Прежде чем выполнять чистовую отделку пола, его необходимо выровнять. Это позволит достичь сразу нескольких целей: ровный пол гораздо удобнее для размещения мебели и комфортнее для передвижения по нему; ровный пол позволяет использовать для отделки плитку и ламинат; в конце концов, ровный пол выглядит гораздо приятнее, чем не ровный. В зависимости от ваших планов на дальнейший ремонт, мы готовы предложить несколько способов выравнивания пола: цементно-песчаная стяжка, полусухая стяжка, самовыравнивающиеся смеси (наливные полы) и выравнивание гипсоволкнистыми листами.';
}

function popupPartition(){
  popupHeading.textContent = 'Монтаж/демонтаж перегородок';
  popupParagraph.textContent = 'В случае, если вы решили сделать перепланировку квартиры, увеличить площадь отдельной комнаты за счет слияния ее с соседней, или, напротив, разбить одну большую комнату на несколько отдельных, вам потребуется демонтаж либо монтаж перегородок. Просим обратить внимание: из соображений безопасности демонтировать можно только ненесущие стены, а возводимые перегородки также не будут несущими, то есть их функция будет заключаться только в разделении пространства.';
}

function popupDecor(){
  popupHeading.textContent = 'Декоративная штукатурка';
  popupParagraph.textContent = 'Если вы хотите видеть в вашей комнате обычные обои или минималистичную краску, то для покрытия стен можно использовать декоративную штукатурку: этот материал позволяет сделать интерьер помещения гораздо более нестандартным и, кроме того, обладает массой преимуществ. Декоратинвая штукатурка устйчива к воздействию влаги и температур, не впитывает запахи, усиливает звукоизоляцию и сохраняет возможность влажной очистки стен, что, к примеру, незаменимо на кухне или в мастерской. Существуют акриловая, минеральная, силикатная и силиконовая дукоративные штукатурки, и каждый из этих видов обладает своим набором качеств.';
}

function popupPlumbing(){
  popupHeading.textContent = 'Сантехника';
  popupParagraph.textContent = 'Ремонт часто связан с обновлением сантехники: монтаж и замена радиаторов отопления (батарей), установка водонагревателей. В случае ванной комнаты это монтаж и демонтаж труб водоснабжения, смесителей, замена и разводка канализации, установка сантехнических приборов (ванная, душевая, раковина, унитаз). Наши мастера готовы взять на себя ответсвенность выполнить эти виды работ надежно и в срок - и за умеренную цену.';
}

function popupElements(){
  popupHeading.textContent = 'Фигурные элементы из гипсокартона';
  popupParagraph.textContent = 'Необычные конструкции из гипсокартона позволяют добавить в интерьер помещения привлекательную изюминку: вместо обычной люстры в комнате можно построить необычную конструкцию, которая помимо освещения пространства будет также привлекать внимание и удивлять своим видом. Также декорировать гипсокартоном можно перегородки - к примеру, выполнить внутри такой стены стеллаж или полку, или просто добавить ей узоров.';
}