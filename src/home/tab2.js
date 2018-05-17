import React, { Component } from 'react';
import {View,StyleSheet,Text,ScrollView,RefreshControl} from 'react-native';
import {List} from 'antd-mobile';
import { createForm } from 'rc-form';

import {RPicker} from 'r-design';
import {RDatePicker} from 'r-design';
import {RDateTimePicker} from 'r-design';

import { district } from './../mock/index';
 
class Tab2 extends Component {
    
    constructor(props) {
        super(props);
        this.state=({value:[''],visible:true,isRefreshing:false});
    }

    componentDidMount() {
  
    }

    _onRefresh=()=>{
        this.setState({isRefreshing: true});
        setTimeout(() => {  
            this.setState({
                isRefreshing: false,

            });
        }, 3000);
    }
    render() {
        return (
            <View  style={styles.container}>
                <ScrollView 
                    style={{flex:1}}
                    horizontal ={false}
                    keyboardDismissMode ='on-drag'
                    showsVerticalScrollIndicator ={false}
                    keyboardShouldPersistTaps='handled'
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            colors={['#00bfff']}
                            progressBackgroundColor="#ffffff"
                            progressViewOffset={50}
                        />
                    }>               
                    <List style={{marginTop: 10 }}  renderHeader={() =>
                        (<View style={{width:'100%',height:40,padding:10}}><Text>选择器</Text></View>)}>
                        <RPicker keyName='areaPicker' label='选择地址' initialValue= {['340000', '341500', '341502']}
                            cols={3}
                            data={district}
                            rules={[{
                                required:true,
                                message:'请选择数据'
                            }, 
                            ]}
                            onDismiss={()=>{this.setState({value:['']});}}
                            value={this.state.value}
                            onChange={(val)=>{this.setState({value:val});}}>
                        </RPicker>

                        <RDatePicker 
                            keyName='dateSelect' label='日期选择器'
                            form={this.props.form}
                            rules={[{
                                required:true,
                                message:'请选择日期'
                            }, 
                            ]}
                        >
                        
                        </RDatePicker>

                        <RDateTimePicker keyName='dateTimePicker' label='时间选择器' mode={'datetime'} 
                            form={this.props.form}
                            rules={[{
                                required:true,
                                message:'请选择时间'
                            }, 
                            ]}
                        >
                           
                        </RDateTimePicker> 
                    </List>
                </ScrollView>
               
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

export default createForm()(Tab2);