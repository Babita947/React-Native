import React, { useState } from 'react';
import { StyleSheet, View, Modal} from 'react-native';
import Header from './components/Header';
import ExpandCollapse from './components/ExpandCollapse';
import EnterCategory from './components/EnterCategory';
import RenderCategories from './components/RenderCategories';
import AddToDo from './components/todo-components/AddToDo';
import ToDoHeader from './components/todo-components/ToDoHeader';
import ToDoList from './components/todo-components/ToDoList';

export default function App() {

  const [CurrentCategories, setCategories] = useState([{ id: 0, value: "study", subList: [{ id: 0, value: 'chemistry', isDone: false }, { id: 1, value: 'physics', isDone: true }] }, { id: 1, value: "home", subList: [] }])
  const [hideField, setHideField] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const hideFieldHandler = (flag) => {
    setHideField(flag);
  };

  const closeModal = () => {
    let data = selectedCategory;
    CurrentCategories.filter(c => {
      if (c.id === selectedCategory.id) {
        c.subList = data.subList;
      }
    });
    setCategories(CurrentCategories);
    setSelectedCategory(null);
  }

  const updateCategories = (enteredCategory) => {
    setCategories(CurrentCategories => [...CurrentCategories, { id: CurrentCategories.length, value: enteredCategory, subList: [] }]);
  };

  const updateTodoList = (data) => {
    setSelectedCategory({ subList: [...selectedCategory.subList, data], id: selectedCategory.id, value: selectedCategory.value });

  }

  const doneItem = (id) => {
    selectedCategory.subList.filter(c => {
      if (c.id === id) {
        c.isDone = !c.isDone;
      }
    })
    setSelectedCategory({ ...selectedCategory });
  }

  const deleteTodo = id => {
    setSelectedCategory({ subList: selectedCategory.subList.filter(s => s.id !== id), id: selectedCategory.id, value: selectedCategory.value });
  }

  return (
    <View>
      <Header></Header>
      <ExpandCollapse hideField={hideField} hideFieldHandler={hideFieldHandler} />
      <EnterCategory hideField={hideField} updateCategories={updateCategories} />
      <RenderCategories CurrentCategories={CurrentCategories} setSelectedCategory={setSelectedCategory} />
      <Modal visible={selectedCategory !== null}>
        <View style={styles.ModalMargin}>
          <ToDoHeader closeModal={closeModal} />
          <AddToDo updateTodoList={updateTodoList} selectedCategory={selectedCategory} />
          <ToDoList selectedCategory={selectedCategory} doneItem={doneItem} deleteTodo={deleteTodo} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  ModalMargin: {
    marginTop: 10
  },
});
