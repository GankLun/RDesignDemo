import React, {Component} from 'react';
import {View,Text,Image} from 'react-native';
import {RFlatList} from 'r-design';


const data=Array.from(new Array(10)).map(
    (item,index)=>{
        return({
            id:index+'',
            img: require('./img/mdl.png'),
            des: '56¥',
            title: '不是所有的兼职汪都需要风吹日晒',  
        });
    }
);


export default class NearBy extends Component {

    constructor(props) {
        super(props);
        this.page=1;
        this.state={dataSource:data,footVisible:false,refreshing:false};
    }

    _onRefresh=()=>{
        this.setState({refreshing: true,footVisible:false});
        setTimeout(() => {  
            this.setState({
                dataSource:data,
                refreshing: false,
            });
            this.page=1;
        }, 2000);
    }
    _loadMore=()=>{
        this.setState({footVisible:true});
        setTimeout(() => {  
            this.setState({
                dataSource:this.state.dataSource.concat(Array.from(new Array(10)).map(
                    (item,index)=>{
                        return({
                            id:(index+this.page*10)+'',
                            img: require('./img/mdl.png'),
                            des: '56¥',
                            title: '不是所有的兼职汪都需要风吹日晒',  
                        });
                    }
                )),
                footVisible: false,

            });
            this.page++;
        }, 2000);
    }
    render() {
        return (
            <RFlatList 
            
                style={{flex:1}}
                refreshControl={true}
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
                progressColors={['#00bfff']}
                progressBackgroundColor={'#ffffff'}
                progressViewOffset={50}
                ItemSeparatorComponent={(<View style={{width:'100%',height:10,backgroundColor:'#ccefff'}}/>)}
                ListEmptyComponent={
                    (
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{color:'#00bfff',fontSize:18}}>暂无数据</Text>
                        </View>
                    )
    
                
                }
                ListHeaderComponent={null}
                footVisible={this.state.footVisible}
                ListFooterComponent={
                    (<View style={{flex:1,height:60,backgroundColor:'#ffffff',
                        alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:16,color:'#00bfff'}}>
                            {'loading more'}
                        </Text>
                    </View>)
                }
                columnWrapperStyle={{}}
                dataSource={this.state.dataSource}
                getItemLayout={(data, index) => ( {length: 100, offset: (100+10) * index, index} )}
                initialNumToRender={5}
                initialScrollIndex={0}
                keyExtractor={(item) => item.id}             
                numColumns={1}
                onEndReached={this._loadMore}
                renderItem={({item})=>{
                    return( <View style={{flex:1,height:100,flexDirection:'row', alignItems:'center'}}>
                        <Image source={item.img} style={ {width: 80, height: 80} }>
                        </Image>
                        <View style={{flex:1,padding:10, justifyContent:'space-between'}}
                        >
                            <Text style={{marginTop:10,fontSize:14,fontWeight:'bold',color:'black'}}>
                                {item.title}
                            </Text>
                            <Text style={{marginBottom:10,fontSize:26,color:'#ffa500'}}>
                                {item.des}
                            </Text>
                        </View>
                    </View>);
                }}
            />
           
        );
    }
}
