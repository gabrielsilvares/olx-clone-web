import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PageArea, SearchArea } from './styled';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';

const Page = () => {
  const api = useApi();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist);
    }
    getStates();
  }, [api]);

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    }
    getCategories();
  }, [api]);

  /*useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        
      });
      setAdList(json.ads);
    }
    getRecentAds();
  }, [api]);*/
  
  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="Estou procurando por..."/>
              <select name="state">
                {stateList.map((i, k) => (
                  <option key={k} value={i.initials}>{i.initials}</option>
                ))}
              </select>
              <IconButton>
                <SearchIcon fontSize="medium" />
              </IconButton>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((i, k) => (
              <Link key={k} to={`/ads?cats=${i.slug}`} className="categoryItem">
                <img src={i.img} alt=""/>
                <span>{i.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>
          ...
        </PageArea>
      </PageContainer>
    </>
  );
};

export default Page
