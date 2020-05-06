import React from 'react'
import styled from 'styled-components'
import * as Tag from 'components/atoms'

const Container = styled.div`
    display: flex;
    width:'1300px'
    flex-direction: rows;
    flex-wrap: wrap;
    align-items: center;
`
const Tabs = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    > * {
        width: 300px;
        height: 150px;
        border-bottom: 0.5px solid rgba(0, 0, 0, .3);
    }
    > div:last-child {
        border-bottom: 0px solid rgba(0, 0, 0, 1);
    }
`

function TabView(){

    return(
        <Container>
                <Tabs>
                    <Tag.Tab.TabButton>  </Tag.Tab.TabButton>
                    <Tag.Tab.TabButton>  </Tag.Tab.TabButton>
                    <Tag.Tab.TabButton> </Tag.Tab.TabButton>
                    <Tag.Tab.TabButton>  </Tag.Tab.TabButton>
                </Tabs>
                
                <Tag.Tab.TabPannel>
                    <Tag.Table style={{width:'1000px', margin:'20px'}}/>
                </Tag.Tab.TabPannel>


                {/* <Tag.Tab.TabContainer>
                </Tag.Tab.TabContainer> */}
        </Container>
    )

}

export default TabView