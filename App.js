
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList,TouchableOpacity } from 'react-native';

export default function App() {

  const pressHandler=(id)=>{
    //const selectedItem=(todos.filter((todo)=>todo.id===id))[0]
    //alert(selectedItem.title)
    let returnValue=[...todos]
    returnValue.forEach(todo=>{
      let contenu=todo.completed
      if(todo.id===id){
        todo.completed=!contenu
     
      }
    })
    setTodos(returnValue)
    

  }
  const [todos,setTodos]=useState([
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    },
    {
      "userId": 2,
      "id": 21,
      "title": "suscipit repellat esse quibusdam voluptatem incidunt",
      "completed": false
    },
    {
      "userId": 2,
      "id": 22,
      "title": "distinctio vitae autem nihil ut molestias quo",
      "completed": true
    },
    {
      "userId": 2,
      "id": 23,
      "title": "et itaque necessitatibus maxime molestiae qui quas velit",
      "completed": false
    },
    {
      "userId": 2,
      "id": 24,
      "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
      "completed": false
    },
    {
      "userId": 2,
      "id": 25,
      "title": "voluptas quo tenetur perspiciatis explicabo natus",
      "completed": true
    },
    {
      "userId": 2,
      "id": 26,
      "title": "aliquam aut quasi",
      "completed": true
    },
    {
      "userId": 2,
      "id": 27,
      "title": "veritatis pariatur delectus",
      "completed": true
    }
  ])

  return (
    <View style={styles.container}>
      <FlatList
      numColumns={1}
        keyExtractor={(item)=>item.id.toString()}
        data={todos}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
             <Text style={{...styles.todo,backgroundColor:item.completed ?'green':'pink'}}>{item.title}</Text>
          </TouchableOpacity>

         
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:10
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    height: 50,
    padding: 10,
    margin: 10
  },
  mytext: {
    fontSize: 20
  },
  buttonstyle: {
    marginTop: 30
  },
  todo:{
    margin:10,
    backgroundColor:'pink',
    color:'white',
    fontSize:30,
  }
});
