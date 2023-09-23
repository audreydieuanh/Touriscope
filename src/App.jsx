import { useState } from 'react'
import templeOfLite from './images/temple_of_literature.jpg'
import hoiAn from './images/hoi_an.jpg'
import conDao from './images/con_dao_islands.jpg'
import hue from './images/imperial_citadel.jpg'
import meKong from './images/mekong_delta.jpg'
import muiNe from './images/mui_ne_sand_dunes.jpeg'
import sonDoong from './images/son_doong_cave.jpeg'
import myKhe from './images/my_khe_beach.jpg'
import saPa from './images/sa_pa_terraces.jpg'
import haLong from './images/halong_bay.jpeg'
import oldQuarter from './images/header.jpg'
import phuQuoc from './images/phuquoc.jpeg'
import './App.css'
import Card from './Card.jsx'

const App = () => {
  return (
    <>
      <div className="header">
        <h1>Vietnam Tourist Attractions</h1>
      </div>

      <div className="card">
        <Card img={templeOfLite}
          name="Temple Of Literature"
          location="Hanoi"
          link="https://en.wikipedia.org/wiki/Temple_of_Literature,_Hanoi" />
        <Card img={hoiAn}
          name="Hoi An Ancient Town"
          location="Quang Nam"
          link="https://en.wikipedia.org/wiki/Hội_An" />
        <Card img={conDao}
          name="Con Dao Island"
          location="Ba Ria - Vung Tau"
          link="https://en.wikipedia.org/wiki/Côn_Đảo" />
        <Card img={hue}
          name="Imperial City of Hue"
          location="Hue"
          link="https://en.wikipedia.org/wiki/Imperial_City_of_Huế" />
        <Card img={meKong}
          name="Mekong Delta"
          location="Southern Vietnam"
          link="https://en.wikipedia.org/wiki/Mekong_Delta" />
        <Card img={muiNe}
          name="Mui Ne Sand Dunes"
          location="Binh Thuan"
          link="https://en.wikipedia.org/wiki/Mũi_Né" />
        <Card img={saPa}
          name="Sa Pa"
          location="Lao Cai"
          link="https://en.wikipedia.org/wiki/Sa_Pa" />
        <Card img={sonDoong}
          name="Son Doong Cave"
          location="Quang Binh"
          link="https://en.wikipedia.org/wiki/Hang_Sơn_Đoòng" />
        <Card img={myKhe}
          name="My Khe Beach"
          location="Da Nang"
          link="https://en.wikipedia.org/wiki/Da_Nang" />
        <Card img={haLong}
          name="Ha Long Bay"
          location="Quang Ninh"
          link="https://en.wikipedia.org/wiki/Hạ_Long_Bay" />
        <Card img={oldQuarter}
          name="Hanoi Old Quarter"
          location="Hanoi"
          link="https://en.wikipedia.org/wiki/Old_Quarter,_Hanoi" />
        <Card img={phuQuoc}
                name="Phu Quoc Island"
                location="Kien Giang"
          link= "https://en.wikipedia.org/wiki/Phú_Quốc"/>


      </div>
    </>
  )
}

export default App
