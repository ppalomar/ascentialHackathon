import React from "react";
import { VectorMap } from "react-jvectormap";

const Map = ({ mapData, onClick }) => {
  const mapDataConverted = mapData.reduce((aux, c) => {
    return {
      ...aux,
      [c]: 1000,
    }
  }, {});

  const handleClick = (e, code) => {
    if(mapData.includes(code)){
      onClick(code);
    }
  }
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "520px"
        }}
        onRegionClick={handleClick}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
          selected: {
            fill: "#2938bc" //color for the clicked country
          },
          selectedHover: {}
        }}
        regionsSelectable={false}
        series={{
          regions: [
            {
              values: mapDataConverted,
              scale: ["#70a1ff", "#1e90ff"], //your color game's here
              normalizeFunction: "polynomial"
            }
          ]
        }}
        onRegionTipShow={e => {
          e.preventDefault();
        }}
      />
    </div>
  );
};
export default Map;