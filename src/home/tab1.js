import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,TouchableHighlight,KeyboardAvoidingView} from 'react-native';
// import {ActivityIndicator} from 'antd-mobile';
import {RCalendar} from 'r-design';
import {RModal} from 'r-design';
import {RTextInput} from 'r-design';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Tab1 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {modalVisible: false,textValue:''};
    }
    setModalVisible=(visible)=>{
        this.setState({modalVisible: visible});
    }
    componentDidMount(){
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
            Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    {this.props.navigation.state.routeName}
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <KeyboardAvoidingView behavior='padding' 
                    keyboardVerticalOffset ={30}>
                    <RTextInput
                        ref={(input)=>{this.input=input;}}
                        style={{width:200,height:40,borderWidth:1,borderColor:'#00adf5',borderRadius:2,
                            padding:0,}}
                        underlineColorAndroid ='transparent'
                        blurOnSubmit ={true}
                        autoCapitalize ={'none'}
                        autoCorrect ={false}
                        autoFocus ={false}
                        caretHidden ={false}
                        editable ={true}
                        keyboardType ={'default'}
                        maxLength ={100}
                        value={this.state.textValue}
                        onChangeText={(value)=>{this.setState({textValue:value});}}
                        onEndEditing ={()=>{}}
                        onSubmitEditing ={()=>{}}
                        placeholder ={'请输入'}
                        placeholderTextColor ={'#00adf5'}
                        returnKeyType ={'done'}
                        secureTextEntry ={false}
                        selectTextOnFocus ={false}
                        numberOfLines={1}
                        multiline={false}
                        defaultValue='5676'
                        onClear={()=>{this.setState({textValue:''});}}
                    />
                </KeyboardAvoidingView>
                <RModal
                    popup={false}
                    maskClosable={true}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onClose={() => {
                        this.setModalVisible(false);
                    }}
                    animationType={'slide-up'}
                >
                    {/* <View  style={{flex:0,justifyContent:'center',alignItems:'center'}}>
                        <View style={{justifyContent:'center',alignItems:'center',width:'80%',
                            height:200,backgroundColor:'white',borderRadius:15}}>
                            <ActivityIndicator
                                animating={true}
                                size="large"
                                color="#00bfff"
                            >
                            </ActivityIndicator>
                            <View  style={{position:'absolute',bottom:10,width:'100%',height:40,
                                paddingLeft:10,paddingRight:10}}>
                                <TouchableHighlight style={{flex:1,justifyContent:'center',alignItems:'center',
                                    backgroundColor:'#00bfff',borderRadius:10}}
                                activeOpacity={1}
                                underlayColor={'#1e90ff'}
                                onPress={() => {
                                    this.setModalVisible(false);
                                }}>
                                    <Text style={{color:'white'}}>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View> */}
                    <View  style={{flex:0}}>
                        <RCalendar
                            type='list'
                            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                            pastScrollRange={50}
                            futureScrollRange={50}
                            scrollEnabled={true}
                            showScrollIndicator={true}                 
                            calendarBackground='#ffffff'
                            textSectionTitleColor='#b6c1cd'
                            selectedDayBackgroundColor= '#00adf5'
                            selectedDayTextColor= '#ffffff'
                            todayTextColor= '#ffa500'
                            dayTextColor='#2d4150'
                            textDisabledColor= '#d9e1e8'
                            dotColor='#00adf5'
                            selectedDotColor= '#ffffff'
                            arrowColor='#00adf5'
                            monthTextColor='#2d4150'
                            textDayFontFamily='monospace'
                            textMonthFontFamily='monospace'
                            textDayHeaderFontFamily='monospace'
                            textDayFontSize= {16}
                            textMonthFontSize={16}
                            textDayHeaderFontSize= {16}                                                 
                            hideArrows={false}
                            hideExtraDays={false}
                            hideDayNames={false}
                            showWeekNumbers={false}
                            markedDates={
                                {
                                    '2018-03-22': {selected:true,startingDay: true, color: '#ffa500'},
                                    '2018-03-23': {selected:true, color: '#ffa500'},
                                    '2018-03-24': {selected:true, color: '#ffa500'},
                                    '2018-03-25': {selected: true, endingDay: true, color: '#ffa500'},
                                }}
                            markingType={'period'}
                        />
                    </View>
                </RModal>   
                <View  style={{position:'absolute',bottom:10,width:'100%',height:40,paddingLeft:10,paddingRight:10}}>
                    <TouchableHighlight style={{flex:1,
                        justifyContent:'center',alignItems:'center',backgroundColor:'#00bfff',borderRadius:10}}
                    activeOpacity={1}
                    underlayColor={'#1e90ff'}
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                        <Text style={{color:'white'}}>Show Modal</Text>
                    </TouchableHighlight>
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
    welcome: {
        fontFamily:'sans-serif',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,    
    },
    instructions: {
        fontFamily:'sans-serif',
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
