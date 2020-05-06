import React, { useEffect } from 'react';
import styled from 'styled-components'

// Redux
import { connect } from 'react-redux';
import { actions as mapActions } from 'ducks/Map';

declare var kakao:any;

const CustomMap = styled.div`
    width: 100%;
    min-height: 100vh;
    position: absolute;
    z-index: 0;
`

// const el = document.getElementById('map');
// var kakaoMap = new kakao.maps.Map(el, {
//     center: new kakao.maps.LatLng(37.563642596447494, 127.0260017409586),
// });


// export const setCenter= () => {            
//     // 이동할 위도 경도 위치를 생성합니다 
//     var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);
//     // 지도 중심을 이동 시킵니다
//     kakaoMap.setCenter(moveLatLon);
// }


function Map(props){
    const { apartInfos } = props
    const { loadAptInfos, updateApt, updateAptChart } = props // actions
    
    useEffect(loadAptInfos,[])
    useEffect(CreateMap,[apartInfos])

    function CreateMap(){

        const el = document.getElementById('map');
        
        const positions = apartInfos.map( data => ({ 
            title: data.aptName,
            latlng: new kakao.maps.LatLng(data.latitudes, data.longitude),
            roadCityCode: data.roadCityCode,
            roadCode: data.roadCode,
            aptName: data.aptName,
        }))
         
        var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; 
        var imageSize = new kakao.maps.Size(35, 35);
          
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
        
        var kakaoMap = new kakao.maps.Map(el, {
            center: new kakao.maps.LatLng(37.563642596447494, 127.0260017409586),
        });
    
        for(var i = 0; i < positions.length; i ++) {
            var marker = new kakao.maps.Marker({
                map: kakaoMap, // 마커를 표시할 지도
                position: positions[i].latlng,
                title : positions[i].title,
                image : markerImage,  
                content: positions[i].roadCityCode, 
    
            });
            var uniqueKey = ({
                roadCityCode: positions[i].roadCityCode,
                roadCode : positions[i].roadCode,
                aptName : positions[i].aptName,
            });

            // marker click event
            (function(marker, uniqueKey) {
                kakao.maps.event.addListener(marker, 'click', function() {
                    updateApt(uniqueKey)
                    updateAptChart(uniqueKey)
                });
            })(marker, uniqueKey);
        }
    }
    
    return (
        <CustomMap className='Map' id="map" />
    )

}

export default connect(
    state => state.map,
    mapActions
)(Map);
