import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AuthContext from '@/context/AuthContext'
import React, { useContext } from 'react'

// const getServerSideProps = async (ctx) => {
//   const { req } = ctx
//   const cookies = new Cookies(req.headers.cookie)
//   const token = cookies.get('token')
//   const user = await getUser(token)
//   return {
//     props: {
//       user
//     }
//   }
// }

export default function Home() {
  const context = useContext(AuthContext);
  const { user } = context
  console.log('=============Context User=======================');
  console.log(user);
  console.log('====================================');
  return (
    <div>

    </div>
  )
}
