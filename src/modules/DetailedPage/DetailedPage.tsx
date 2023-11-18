import { useEffect, useState } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import './details.scss';
import { Loader } from '../Loader';
import { useGetBeerQuery } from '../API/Api';

export function DetailedPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('details') || '1';
  const { data = [], isLoading } = useGetBeerQuery(id);
  const changeUrl = () => {
    searchParams.delete('details');
    setSearchParams(searchParams);
  };
  return (
    <div className="details">
      <div className="close-button" onClick={changeUrl}>
        ✖
      </div>
      <div className="details-item">
        {isLoading && <Loader />}
        {!isLoading && (
          <>
            <h2>{data[0].name}</h2>
            <img src={data[0].image_url} className="beer-image"></img>
            <div>{data[0].description}</div>
            <div>Alcohol: {data[0].abv}%</div>
          </>
        )}
      </div>
    </div>
  );
}
