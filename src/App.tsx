// useStateフックをインポートする。これにより、Reactコンポーネントで状態を管理できる
import { useState } from 'react'
// Reactのロゴ画像をインポートする
import reactLogo from './assets/react.svg'
// Viteのロゴ画像をインポートする
import viteLogo from '/vite.svg'
// アプリケーションのスタイルシートをインポートする
import './App.css'

// Item型を定義する。これは各TODO項目の構造を表す
type Item = {
  id: number;       // 各TODO項目の一意のID
  text: string;     // TODO項目のテキスト
  completed: boolean; // TODO項目が完了したかどうかを示すフラグ
}

// Appコンポーネントの定義を始める
function App() {

  /**
   * todos = TODOリストの状態そのもの
   * setTodos = todosを操作する部品
   */
  // useStateフックを使ってtodos状態を定義する。初期値は空の配列
  const [todos, setTodos] = useState<Item[]>([]); 

  /**
   * newTodo = 画面上で入力されたtodoの文章
   * setNewTodo = newTodoを操作する
   */
  // useStateフックを使ってnewTodo状態を定義する。初期値は空の文字列
  const [newTodo, setNewTodo] = useState<string>('');

  // 新しいTODO項目を追加する関数
  const addTodo = () => {
    // newTodoが空の場合は何もしない
    if (newTodo.trim() === '') return; 
    // 新しいTODO項目を作成する
    const newTodoItem: Item = {
      id: Date.now(),          // 現在の時間をIDとして使用する（簡単な一意のIDの生成方法）
      text: newTodo,           // newTodo状態の値をテキストとして設定する
      completed: false,        // 新しいTODO項目は未完了として追加される
    }
    // 現在のtodos状態に新しいTODO項目を追加し、setTodosを使って状態を更新する
    setTodos([...todos, newTodoItem]);
    // newTodo状態を空に戻して、入力フィールドをリセットする
    setNewTodo('');
  }

  // 指定されたIDのTODO項目の完了状態を切り替える関数
  const toggleTodo = (id: number) => {
    // todos状態をマップして、指定されたIDの項目のcompletedフラグを切り替える
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Appコンポーネントの描画内容を定義する
  return (
    <div>
      <h1>TODO</h1>
      {/* 入力フィールドと追加ボタン */}
      <input
        type='text'
        value={newTodo}               // newTodo状態を入力フィールドの値として設定する
        onChange={(e) => setNewTodo(e.target.value)} // 入力フィールドの値が変わるたびにnewTodo状態を更新する
      />
      <button onClick={addTodo}>Add</button> {/* クリックするとaddTodo関数を呼び出す */}
      <ul>
        {todos.map(todo => {
          return (
            <li 
              key={todo.id}              // 各TODO項目に一意のキーを設定する
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} // completedフラグに応じてテキストに取り消し線を引くスタイルを適用する
            >
              {todo.text}                // TODO項目のテキストを表示する
              <button onClick={() => toggleTodo(todo.id)}> {/* クリックするとtoggleTodo関数を呼び出す */}
                {todo.completed ? 'Undo' : 'Completed'} // completedフラグに応じてボタンのテキストを切り替える
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

// Appコンポーネントをエクスポートする。これにより、他のファイルでこのコンポーネントをインポートして使用できる
export default App
