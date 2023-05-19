import {Carduse} from "./Carduse";

import i2 from "./image/Rectangle 32.png";
import i3 from "./image/Focus.png";
import i4 from "./image/instrument.png";
import i5 from "./image/flow.png";
import i6 from "./image/beats.png";
import i7 from "./image/top.png";
import i8 from "./image/rappeur.png";
import i9 from "./image/mars.png";
import i10 from "./image/rock.png";
import i11 from "./image/chill.png";


const Dash = () => {
  const table=[
  
    {
      title: "Peaceful Piano",
      description: "Peaceful Piano to help you show down, breathe ,and...",
      imgUrl: i2,
      alt:"it1"
    },
    {
      title: "Deep Focus",
      description: "Keep calm and focus with ambient and post-rock musi",
      imgUrl: i3,
      alt:"it2"
    },
    {
      title: "Instrumental Study",
      description: "Focus with soft study music in the background.",
      imgUrl: i4,
      alt:"it3"
    },
    {
      title: "Focus Flow",
      description: "Uptempo instrumental hip hop beats.",
      imgUrl: i5,
      alt:"it4"
    },
    {
      title: "Beats to think to",
      description: "Focus with deep techno and tech house.",
      imgUrl: i6,
      alt:"it5"
    },
  ]

  const table2=[
  
    {
      title: "Today’s Top Hits",
      description: "Harry Styles is on top of the Hottest 50!",
      imgUrl: i7,
      alt:"it1"
    },
    {
      title: "RapCaviar",
      description: "New music from Lil Baby, Gucci Mane and DaBaby.",
      imgUrl: i8,
      alt:"it2"
    },
    {
      title: "All Out 2010s",
      description: "The biggest songs of the 2010s.",
      imgUrl: i9,
      alt:"it3"
    },
    {
      title: "Rock Classics",
      description: "Rock legends & epic songs that continue to inspire.",
      imgUrl: i10,
      alt:"it4"
    },
    {
      title: "Chill Hits",
      description: "Kick back to the best new and recent chill hits.",
      imgUrl: i11,
      alt:"it5"
    },
  ]
  return (
    <section className="  container-fluid bg-secondary HTR">
      <div className="row offset-lg-2  text-white">
<div className=" d-flex justify-content-between p-3">
<p>Focus</p>
<p>Show all</p>
</div>
<div class="row row-cols-1 mx-auto row-cols-md-3 row-cols-lg-5 g-4">

{
                    table.map((last,index)=>{
                        return(
                        <Carduse
                        key={index}
                        {...last}
                        />
                        )
                    })
                }
 
 
 
  
 
</div>
<div className=" d-flex justify-content-between p-3">
<p>Spotify Playlists</p>
<p>Show all</p>
</div>
<div class="row row-cols-1  mx-auto row-cols-md-3 row-cols-lg-5 g-4">

{
                    table2.map((last,index)=>{
                        return(
                        <Carduse
                        key={index}
                        {...last}
                        />
                        )
                    })
                }

</div>
      
  
  </div>
    </section>
  );
};

export default Dash;
