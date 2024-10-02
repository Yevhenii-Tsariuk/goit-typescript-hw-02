import { useEffect, useState, useRef } from "react";
import axios from "axios"
import toast from "react-hot-toast";

import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal"
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadeMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import "./App.module.css";


export default function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);

  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const API_KEY = 'F_ZlTxZXItMqdyPkbSBeCFXGZFvz6W7v-KobzwM2plM';
  const perPage = 12;
  const listRef = useRef();

  useEffect(() => {
    if (topic === "") {
      return;
    }

  async function getPhotos() {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${API_KEY}`,
        {
          params: {
            page: page,
            per_page: perPage,
            query: topic,
          },
        })
      setPhotos((prevState) => [...prevState, ...response.data.results]);
      
      if (response.data.total > page * perPage) {
        setLoadMore(true);
      } else {
        toast("You've reached the end of search results");
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  getPhotos();
}, [page, topic]);

const handleSearch = (newTopic) => {
  setTopic(newTopic);
  setPage(1);
  setPhotos([]);
};

const handleLoadMore = () => {
  setPage(page + 1);
};

useEffect(() => {
  if (listRef.current) {
    const itemSizes = listRef.current.lastChild.getBoundingClientRect();

    scrollBy({
      top: itemSizes.top + itemSizes.height * 2,
      behavior: "smooth",
    });
  }
}, [photos]);

const openModal = (image) => {
  setSelectedImage(image);
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
  setSelectedImage(null);
};

  return (
    <div>
      <SearchBar onSubmit={handleSearch} topic={topic}/>
      {photos.length > 0 && <ImageGallery items={photos} listRef={listRef} onImageClick={openModal}/>}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {modalIsOpen && <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} image={selectedImage}/>}
      {loadMore && photos.length > 0 && !loading && <LoadeMoreBtn onClick={handleLoadMore}/>}
      
    </div>
  );}


// F_ZlTxZXItMqdyPkbSBeCFXGZFvz6W7v-KobzwM2plM -  Access key from Unsplash


