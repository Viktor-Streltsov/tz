import BlockName from "./components/blockName/BlockName";
import BlockComments from "./components/blockComments/BlockComments";
import styles from './styles/App.module.scss';


function App() {
  return (
    <div className={styles.content}>
      <BlockName/>
        <BlockComments/>
    </div>
  );
}

export default App;
