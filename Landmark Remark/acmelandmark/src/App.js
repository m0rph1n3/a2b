import {Route, Routes,BrowserRouter} from 'react-router-dom';
import AllSaveLocationPage from './pages/AllSaveLocationPage';
import NewSaveLocationPage from './pages/NewSaveLocationPage';
import MainNavigation from './components/layout/MainNavigation';
import AllNotesByLocIdPage from './pages/AllNotesByLocIdPage';
import AddNotesByLocIdPage from './pages/AddNotesByLocIdPage';
import FilterNotes from './pages/FilterNotes';
import FilterNoteResults from './pages/FilterNoteResults';
import Layout from './components/layout/Lauout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllSaveLocationPage />} />
            <Route path="/filter" element={<FilterNotes />} />
            <Route path="/new-save-location" element={<NewSaveLocationPage />} />
            <Route path="/all-notes/:id" element={<AllNotesByLocIdPage />} />
            <Route path="/add-note/:id" element={<AddNotesByLocIdPage />} />
            <Route path="/filter-note-results/:filter" element={<FilterNoteResults />} />
          </Routes>
        </Layout>
      </BrowserRouter>
           
    </div>
  );
}

export default App;
