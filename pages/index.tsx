import Head from 'next/head'
import { Container, Heading, Button } from '@chakra-ui/react'
import AddUserForm from '../components/AddUserForm'
import UserList from '../components/UserList'

export default function Home() {
  return (
    <>
      <Head>
        <title>User management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="8xl" bg="whiteAlpha.300" paddingTop={'16'} >
        <Heading as="h2" size="2xl" textAlign="center">User management</Heading>
        <Button
          width={{ base: "200px", "md": "200px" }}
          marginTop={8}
          colorScheme='blue'>
          Add new user
        </Button>
        <AddUserForm />
        <UserList />
      </Container>
    </>
  )
}
