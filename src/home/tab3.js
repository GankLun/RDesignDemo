import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {List} from 'antd-mobile';
import {RModal} from 'r-design';
import {RButton} from 'r-design';
import {RCalendar} from 'r-design';
  

export default class Tab3 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {modalVisible: false,markedDates:{}};
    }
    setModalVisible=(visible)=>{
        this.setState({modalVisible: visible});
    }
    render() {
        return (
            <View style={styles.container}>
            
                <RCalendar

                    calendarBackground='#ffffff'
                    textSectionTitleColor= '#b6c1cd'
                    selectedDayBackgroundColor= '#00adf5'
                    selectedDayTextColor='#ffffff'
                    todayTextColor='#00adf5'
                    dayTextColor='#2d4150'
                    textDisabledColor= '#d9e1e8'
                    dotColor='#00adf5'
                    selectedDotColor= '#ffffff'
                    arrowColor='#00adf5'
                    monthTextColor='#2d4150'
                    textDayFontFamily= 'monospace'
                    textMonthFontFamily= 'monospace'
                    textDayHeaderFontFamily= 'monospace'
                    textDayFontSize={16}
                    textMonthFontSize={16}
                    textDayHeaderFontSize= {16}
                
                    current={new Date()}
                    hideArrows={false}
                    hideExtraDays={false}
                    hideDayNames={false}
                    showWeekNumbers={false}
                    disableMonthChange={false}
                    markedDates={this.state.markedDates}
                    markingType={'simple'}
                    onDayPress={(obj) => {
                        const markedDates={};
                        markedDates[obj.dateString]={selected:true};
                        this.setState({markedDates:markedDates});
                    }}
                    renderArrow={undefined}
                    firstDay={7}
                />
     
                <RModal
                    popup={true}
                    maskClosable={true}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onClose={() => {
                        this.setModalVisible(false);
                    }}
                    animationType="slide-up"
                >
                    <List renderHeader={() => <View><Text style={{textAlign:'center',fontSize:16,marginTop:5}}>
                    委托买入</Text></View>} 
                    style={styles.popup}>
                        {['股票名称', '股票代码', '买入价格'].map((i, index) => (
                            <List.Item key={index}>{i}</List.Item>
                        ))}
                        <List.Item>
                            <RButton style={{flex:1,backgroundColor:'#00bfff',borderRadius:10}} 
                                onPress={()=>{this.setModalVisible(false);}}
                                textStyle={{color:'#ffffff',fontSize:18}}
                                textValue={'买入'}
                                underlayColor={'#5fcfff'}>
                            </RButton>
                        </List.Item>
                    </List>
                </RModal>
                <View  style={{position:'absolute',bottom:10,width:'100%',height:40,paddingLeft:10,paddingRight:10}}>

                    <RButton
                        style={{flex:1,backgroundColor:'#00adf5',borderRadius:10
                        }}
                        activeOpacity={0.0}
                        underlayColor={'#5fcfff'}
                        textStyle={{color:'#ffffff',fontSize:14}}
                        textValue='show Modal'
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    >
                    </RButton>
                </View>
            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    popup:{
        height: 210,
        overflow: 'visible',
    },
});
