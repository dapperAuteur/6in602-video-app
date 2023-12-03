import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  console.log('session :>> ', session);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='pb-40'>
        <h1>Dashboard</h1>
      </div>
    </>
  )
}

export default Dashboard;