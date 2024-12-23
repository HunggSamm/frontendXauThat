import { Box, Image, Badge, Text, Flex, Button, Stack } from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useMemo } from 'react';
import StarRating from './StarRating';

const CourseCard = ({ onMakeFeatured }) => {
    const course = {
        title: "Introduction to React",
        category: "Web Development",
        imagePreview: "https://via.placeholder.com/400",
        rating: 8.5,
        ratingCount: 120,
        views: 1050,
        special: true,
        hot: false,
        isPublish: true,
        price: {
            salePrice: 100,
            price: 120
        },
        lastUpdated: "2024-10-30",
    };

    const averageRating = useMemo(() => {
        return course.rating ? course.rating.toFixed(1) : "N/A";
    }, [course.rating]);

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="100%">
            <Image src={course.imagePreview} alt={course.title} borderRadius="md" w="100%" h="auto" />
            {course.special && (
                <Badge borderRadius="full" px="2" colorScheme="orange" position="absolute" top="2" right="2">SPECIAL</Badge>
            )}
            {course.hot && (
                <Badge borderRadius="full" px="2" colorScheme="red" position="absolute" top="2" right="2">HOT</Badge>
            )}
            <Box mt={2}>
                <Text fontWeight="bold" fontSize="sm" color="gray.500">{course.category}</Text>
                <Text mt={1} fontWeight="semibold" fontSize="lg">{course.title}</Text>
                <Flex align="center" mt={2}>
                    <StarRating rating={parseFloat(averageRating)} />
                    <Text ml={1} fontSize="sm">({course.ratingCount} reviews)</Text>
                    <Flex align="center" ml={4}>
                        <FaEye />
                        <Text ml={1} fontSize="sm">{course.views}</Text>
                    </Flex>
                </Flex>
            </Box>
            <Stack mt={4} direction="row" align="center" justify="space-between">
                <Flex align="center" color="green.500">
                    <CheckCircleIcon mr={1} />
                    <Text>{course.isPublish ? 'Published' : 'Unpublished'}</Text>
                </Flex>
                {course.price?.salePrice && (
                    <Text as="s" color="gray.500">${course.price.salePrice}</Text>
                )}
                <Text fontWeight="bold">${course.price?.price}</Text>
            </Stack>
            <Button colorScheme="blue" mt={4} w="100%" height={20} onClick={onMakeFeatured}>
                MAKE FEATURED
            </Button>
            <Text mt={2} fontSize="sm" color="gray.500">Last updated: {course.lastUpdated}</Text>
        </Box>
    );
};

export default CourseCard;
