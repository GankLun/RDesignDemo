import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Image,
} from 'react-native';
import { TabBar } from 'antd-mobile';
import {RTextAreaInput} from 'r-design';
import {RSwitch} from 'r-design';
import {RCheckBox} from 'r-design';
import {RToast} from 'r-design';


export default class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedTab: 'redTab', textValue:'',checked:true};
    }
    componentDidMount(){
        RToast.success('success',3,()=>{},false);
    }

    renderContent(pageText) {
        const checkedImage= (<Image source={ require('./img/switch_on.png')} />);
        const unCheckedImage=(<Image source={ require('./img/switch_off.png')} />);
        return (
            <ScrollView //添加ScrollView，可以使点击键盘右下角提交按键不会发生弹起闪烁问题
                style={{flex:1 ,backgroundColor: 'white', }}
                contentContainerStyle={{alignItems:'center',}}
                horizontal ={false}
                keyboardDismissMode ='none'
                showsVerticalScrollIndicator ={true}
                keyboardShouldPersistTaps='always'
 
            >    
                <View style={{flex:1,height:600,alignItems:'center',justifyContent:'center'}}>
                    <Text>{pageText}</Text>
                    <RSwitch onClick={()=>{this.setState({checked:!this.state.checked});
                        RToast.offline('offline',3,()=>{},false);}}
                    isChecked={this.state.checked}
                    />
                    <RSwitch onClick={()=>{this.setState({checked:!this.state.checked});
                        RToast.show('info',3);}}
                    isChecked={this.state.checked}
                    checkedImage={checkedImage}
                    unCheckedImage={unCheckedImage}
                    style={{marginTop:10}}
                    />
                    <RCheckBox isChecked={this.state.checked}
                        disabled={false}
                        style={{marginTop:10}}
                        checkBoxColor={'#00adf5'}
                        onClick={()=>{this.setState({checked:!this.state.checked});
                            RToast.fail('fail',3,()=>{},false);}}
                    />
                    <RCheckBox isChecked={this.state.checked}
                        disabled={false}
                        style={{marginTop:10}}
                        checkBoxColor={'#ffa500'}
                        onClick={()=>{this.setState({checked:!this.state.checked});
                            RToast.loading('loading',3,()=>{},false);}}
                    />
                    <RCheckBox isChecked={this.state.checked}
                        disabled={true}
                        style={{marginTop:10}}
                        checkBoxColor={'#33eeff'}
                        onClick={()=>{this.setState({checked:!this.state.checked});}}
                    />
                </View>
                <KeyboardAvoidingView behavior='height' 
                    keyboardVerticalOffset ={0}
                    style={{position:'absolute',top:10,}}                     
                >
                    <RTextAreaInput
                        value={this.state.textValue}
                        onChangeText={(value)=>{this.setState({textValue:value});}}
                        onClear={()=>{this.setState({textValue:''});}}>
                    </RTextAreaInput>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }

    render() {
        return (
            <View  style={{flex:1}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={require('./img/tabbar_btn_main_nor.png') }             
                        selectedIcon={require('./img/tabbar_btn_main_foc.png') }             
                        badge={1}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}

                    >
                        {this.renderContent('Life')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            require('./img/tabbar_btn_video_nor.png')
                        }
                        selectedIcon={
                            require('./img/tabbar_btn_video_foc.png')
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            require('./img/tabbar_btn_mine_nor.png')
                        }
                        selectedIcon={
                            require('./img/tabbar_btn_mine_foc.png')
                        }
                        title="Friend"
                        key="Friend"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={require('./img/tabbar_btn_video_nor.png')
                        }
                        selectedIcon={require('./img/tabbar_btn_video_foc.png')}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </View>
           
        );  
    }
}