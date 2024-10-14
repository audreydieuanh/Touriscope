const destinationsData = [
    {
        "imgLink":'https://upload.wikimedia.org/wikipedia/commons/3/31/Hanoi_Temple_of_Literature.jpg',
        "name": "Temple Of Literature",
        "location": "Hanoi",
        "resourceLink": "https://en.wikipedia.org/wiki/Temple_of_Literature,_Hanoi"
      },
      {
        "imgLink": 'https://statics.vinpearl.com/hoi-an-ancient-town_1648356190.jpg',
        "name": "Hoi An Ancient Town",
        "location": "Quang Nam",
        "resourceLink": "https://en.wikipedia.org/wiki/Hội_An"
      },
      {
        "imgLink": ' https://cms.vietnamcoracle.com/wp-content/uploads/2022/09/20220831_153143-title-tilt-scaled.jpg',
        "name": "Con Dao Island",
        "location": "Ba Ria - Vung Tau",
        "resourceLink": "https://en.wikipedia.org/wiki/Côn_Đảo"
      },
      {
        "imgLink": 'https://silkpathhotel.com/wp-content/uploads/2023/11/silkpath-hue-imperial-citadel-1-scaled.jpg',
        "name": "Imperial City of Hue",
        "location": "Hue",
        "resourceLink": "https://en.wikipedia.org/wiki/Imperial_City_of_Huế"
      },
      {
        "imgLink": 'https://saigonriders.com/wp-content/uploads/2018/10/10.-Ao-ba-ba-_-Saigon-Riders.jpg',
        "name": "Mekong Delta",
        "location": "Southern Vietnam",
        "resourceLink": "https://en.wikipedia.org/wiki/Mekong_Delta"
      },
      {
        "imgLink": 'https://asiapioneertravel.com/wp-content/uploads/2023/10/Mui-Ne-Sand-Dunes.png',
        "name": "Mui Ne Sand Dunes",
        "location": "Binh Thuan",
        "resourceLink": "https://en.wikipedia.org/wiki/Mũi_Né"
      },
      {
        "imgLink": 'https://sapatoursfromhanoi.com/wp-content/uploads/2015/08/Terraced-Rice-Fields-In-Sapa-7.jpg',
        "name": "Sa Pa",
        "location": "Lao Cai",
        "resourceLink": "https://en.wikipedia.org/wiki/Sa_Pa"
      },
      {
        "imgLink": 'http://www.nationalgeographic.com/news-features/son-doong-cave/2/img/son-doong-cave-opengraph-c.jpg',
        "name": "Son Doong Cave",
        "location": "Quang Binh",
        "resourceLink": "https://en.wikipedia.org/wiki/Hang_Sơn_Đoòng"
      },
      {
        "imgLink": 'https://vietnamnomad.com/wp-content/uploads/2020/02/My-Khe-Beach-Da-Nang-guide-Vietnamnomad-1024x682.jpg',
        "name": "My Khe Beach",
        "location": "Da Nang",
        "resourceLink": "https://en.wikipedia.org/wiki/Da_Nang"
      },
      {
        "imgLink": 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/3f/40/63.jpg',
        "name": "Halong Bay",
        "location": "Quang Ninh",
        "resourceLink": "https://en.wikipedia.org/wiki/Hạ_Long_Bay"
      },
      {
        "imgLink": 'https://hanoioldquarter.info/wp-content/uploads/2018/02/stock-photo-155026169-741x486.jpg',
        "name": "Hanoi Old Quarter",
        "location": "Hanoi",
        "resourceLink": "https://en.wikipedia.org/wiki/Old_Quarter,_Hanoi"
      },
      {
        "imgLink": 'https://image.vietnam.travel/sites/default/files/styles/top_banner/public/2022-10/shutterstock_1660147075.jpg',
        "name": "Phu Quoc Island",
        "location": "Kien Giang",
        "resourceLink": "https://en.wikipedia.org/wiki/Phú_Quốc"
      },
      {
        "imgLink": "https://vietnamdiscovery.com/wp-content/uploads/2019/10/Ben-Thanh-market-Saigon.jpeg",
        "name": "Ho Chi Minh City (Saigon)",
        "location": "Ho Chi Minh City",
        "resourceLink": "https://en.wikipedia.org/wiki/Ho_Chi_Minh_City"
      },
      {
        "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNJn4-wO_Zic3bM0nqBt-K70oXX9fOev_2v14R8ealuA7lRkPPPAgJ-1H55rNPDHpWT8&usqp=CAU",
        "name": "Cu Chi Tunnels",
        "location": "Ho Chi Minh City",
        "resourceLink": "https://en.wikipedia.org/wiki/C%E1%BB%A5_Chi_tunnels"
      },
      {
        "imgLink": "https://strapi-images-prod.s3.us-west-1.amazonaws.com/paradise-cave-phong-nha-vietnam-shutterstock_328092149_848eec02ed.jpeg",
        "name": "Phong Nha-Ke Bang National Park",
        "location": "Quang Binh",
        "resourceLink": "https://en.wikipedia.org/wiki/Phong_Nha-Ke_B%C3%A0ng_National_Park"
      },
      {
        "imgLink": "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_650/v1622633103/My-Son-In-Vietnam-Site/My-Son-In-Vietnam-Site.jpg",
        "name": "My Son Sanctuary",
        "location": "Quang Nam",
        "resourceLink": "https://en.wikipedia.org/wiki/M%E1%BB%B9_S%C6%A1n"
      },
      {
        "imgLink": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/c5/92/a1/trang-an-grottoes-harbor.jpg?w=1200&h=-1&s=1",
        "name": "Trang An",
        "location": "Ninh Binh",
        "resourceLink": "https://en.wikipedia.org/wiki/Tràng_An_Scenic_Landscape_Complex"
      },
      {
        "imgLink": "https://touringhighlights.com/wp-content/uploads/2020/06/Cable-Car-Dalat-Da-Lat-Vietnam.jpg",
        "name": "Dalat City",
        "location": "Lam Dong",
        "resourceLink": "https://en.wikipedia.org/wiki/Da_Lat"
      },
      {
        "imgLink": "https://vietnamdiscovery.com/wp-content/uploads/2020/11/hai-van-pass.jpg",
        "name": "Hai Van Pass",
        "location": "Hue and Da Nang",
        "resourceLink": "https://en.wikipedia.org/wiki/H%E1%BA%A3i_V%C3%A2n_Pass"
      },
      {
        "imgLink": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/8b/e8/53/external.jpg?w=1200&h=1200&s=1",
        "name": "Cao Dai Temple",
        "location": "Tay Ninh",
        "resourceLink": "https://en.wikipedia.org/wiki/Cao_%C4%90%C3%A0i"
      },
      {
        "imgLink": "https://upload.wikimedia.org/wikipedia/commons/4/47/Ba_Be_Lake_6464.jpg",
        "name": "Ba Be Lake",
        "location": "Ba Be National Park, Bac Kan",
        "resourceLink": "https://en.wikipedia.org/wiki/Ba_B%E1%BA%BF_Lake"
      },
      {
        "imgLink": "https://www.vietvisiontravel.com/wp-content/uploads/2019/02/Guide-to-Tam-Dao-Vietnam.png",
        "name": "Vinh Phuc",
        "location": "Tam Dao",
        "resourceLink": "https://en.wikipedia.org/wiki/Tam_%C4%90%E1%BA%A3o"
      },
      {
        "imgLink": "https://live.staticflickr.com/8075/8303291134_1f3ac9d8e2_b.jpg",
        "name": "Phan Rang-Thap Cham (Cham Towers)",
        "location": "Ninh Thuan",
        "resourceLink": "https://en.wikipedia.org/wiki/Phan_Rang%E2%80%93Th%C3%A1p_Ch%C3%A0m"
      },
      {
        "imgLink": "https://sayhellovietnam.com/wp-content/uploads/2021/12/Huyen-Khong-Cave.jpeg",
        "name": "Marble Mountains",
        "location": "Da Nang",
        "resourceLink": "https://en.wikipedia.org/wiki/Marble_Mountains_(Vietnam)"
      },
      {
        "imgLink": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/6e/b6/30/amazing-bay-and-floating.jpg?w=1200&h=-1&s=1",
        "name": "Lan Ha Bay",
        "location": "Hai Phong",
        "resourceLink": "https://en.wikipedia.org/wiki/L%C4%83n_H%E1%BA%A1_Bay"
      },
      {
        "imgLink": "https://izitour.com/media/ckeditor/cu-lao-cham-island-beach_2023-09-05_473.webp",
        "name": "Cu Lao Cham",
        "location": "Quang Nam",
        "resourceLink": "https://en.wikipedia.org/wiki/C%C3%B9_Lao_Ch%C3%A0m"
      },
      {
        "imgLink": "https://a.cdn-hotels.com/gdcs/production28/d58/181be07c-4fc8-48e7-bc47-7b437939cafd.jpg",
        "name": "Nha Trang",
        "location": "Nha Trang",
        "resourceLink": "https://en.wikipedia.org/wiki/Nha_Trang"
      },
      {
        "imgLink": "https://www.tripsavvy.com/thmb/82Ge98b9CpdWhoPg1osvMwdkd2M=/2278x1280/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-507241723-f1780787dfd54d75bd128e7d8a0dd746.jpg",
        "name": "War Remnants Museum",
        "location": "Ho Chi Minh City",
        "resourceLink": "https://en.wikipedia.org/wiki/War_Remnants_Museum"
      },
      {
        "imgLink": "https://media.worldnomads.com/Explore/vietnam/tents-and-small-people-in-a-cave-vietnam-parinazbilimoria.jpg",
        "name": "Phong Nha Cave",
        "location": "Quang Binh",
        "resourceLink": "https://en.wikipedia.org/wiki/Phong_Nha_Cave"
      },
      {
        "imgLink": "https://vietnamdiscovery.com/wp-content/uploads/2020/01/Thien-Mu-pagoda-in-Hue-huedaytour.com_.jpg",
        "name": "Thien Mu Pagoda",
        "location": "Hue",
        "resourceLink": "https://en.wikipedia.org/wiki/Thi%C3%AAn_M%C3%BA_Pagoda"
      },
      {
        "imgLink": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/1d/15/e1/keo-pagoda.jpg?w=1200&h=-1&s=1",
        "name": "Keo Pagoda",
        "location": "Thai Binh",
        "resourceLink": "https://en.wikipedia.org/wiki/Keo_Pagoda"
      },
      {
        "imgLink": "https://ik.imagekit.io/tvlk/blog/2022/12/du-lich-buon-ma-thuot-1.jpg?tr=dpr-2,w-675",
        "name": "Buon Ma Thuot",
        "location": "Buon Ma Thuot",
        "resourceLink": "https://en.wikipedia.org/wiki/Bu%C3%B4n_Ma_Thu%E1%BB%99t"
      },
      {
        "imgLink": "https://vcdn1-dulich.vnecdn.net/2022/07/29/muine-1659059278-5222-16590594-9037-6291-1659068912.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=tzc1fgx29gobuD3qWKJfgA",
        "name": "Mui Ne Fishing Village",
        "location": "Phan Thiet",
        "resourceLink": "https://en.wikipedia.org/wiki/M%E1%BB%99c_B%C3%A0i"
      },
      {
        "imgLink": "https://statics.vinpearl.com/hue-museum-of-royal-antiquities-2_1677604455.jpg",
        "name": "Hue Royal Antiquities Museum",
        "location": "Hue",
        "resourceLink": "https://en.wikipedia.org/wiki/Hu%E1%BA%BF_Royal_Antiquities_Museum"
      },
      {
        "imgLink": "https://www.indochinatravelpackages.com/wp-content/uploads/2016/01/Haiphong-Opera-House-600x400.jpg",
        "name": "Hai Phong Opera House",
        "location": "Hai Phong",
        "resourceLink": "https://en.wikipedia.org/wiki/H%C3%A0i_Ph%C3%B2ng_Opera_House"
      }
    ]

    export default destinationsData;