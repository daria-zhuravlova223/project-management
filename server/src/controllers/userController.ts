import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error retrieving users: ${error.message}` });
  }
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const {
      username,
      cognitoId,
      profilePictureUrl = 'i1.jpeg',
      teamId = 1,
    } = req.body;
    const newUser = await prisma.user.create({
      data: { username, cognitoId, profilePictureUrl, teamId },
    });

    res.json({ message: 'User created Successfully', newUser });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error retrieving users: ${error.message}` });
  }
};
