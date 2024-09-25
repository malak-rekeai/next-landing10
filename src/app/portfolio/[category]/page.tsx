import React from 'react';
import { items } from './data.js';
import { notFound } from 'next/navigation';
import styles from './category.module.css';

const getdata = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound(); 
};

const Page = ({ params }) => {
  const data = getdata(params.category); 

  return (
    <div>
      <div>
        <h2 className={styles.head1}>{params.category.charAt(0).toUpperCase() + params.category.slice(1)}</h2> 
      </div>
      <div className={styles.container}>
        {data.map((item, index) => ( 
          <div key={item.id} className={styles.work}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.img} 
            />
            <div>
              <h3 className={styles.title}>{item.title}</h3> 
              <p className={styles.text}>{item.desc}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
