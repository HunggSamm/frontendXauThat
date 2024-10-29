import React, { useEffect, useState } from 'react';
import { Box, Text, HStack, VStack, Progress, Button, Icon, Divider, Textarea } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
    const [reviews, setReviews] = useState([
        { id: 1, rating: 5, comment: "Great course!", owner: "Alice", response: "", showResponseInput: false },
        { id: 2, rating: 4, comment: "Very helpful.", owner: "Bob", response: "", showResponseInput: false },
        { id: 3, rating: 3, comment: "It was okay.", owner: "Charlie", response: "", showResponseInput: false },
        { id: 4, rating: 5, comment: "Loved it!", owner: "David", response: "", showResponseInput: false },
        { id: 5, rating: 2, comment: "Not what I expected.", owner: "Eve", response: "", showResponseInput: false },
    ]);
    
    const [averageRating, setAverageRating] = useState(0);
    const [ratingsCount, setRatingsCount] = useState({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
    const [newReview, setNewReview] = useState({ rating: 0, comment: "", owner: "You" });
    const [isWritingReview, setIsWritingReview] = useState(false);
    const [response, setResponse] = useState({ id: null, text: "" });

    useEffect(() => {
        calculateAverageRating(reviews);
    }, [reviews]);

    const calculateAverageRating = (reviews) => {
        const count = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        const total = reviews.reduce((acc, review) => {
            count[review.rating] += 1;
            return acc + review.rating;
        }, 0);
        setRatingsCount(count);
        setAverageRating((total / reviews.length).toFixed(1));
    };

    const handleSubmit = () => {
        if (newReview.comment.trim() === "" || newReview.rating === 0) {
            alert("Please enter a comment and a rating.");
            return;
        }

        setReviews([...reviews, { ...newReview, id: reviews.length + 1, response: "", showResponseInput: false }]);
        setNewReview({ rating: 0, comment: "", owner: "You" });
        setIsWritingReview(false);
    };

    const handleResponseSubmit = (id) => {
        if (response.text.trim() === "") {
            alert("Please enter a response.");
            return;
        }

        setReviews(reviews.map(review => 
            review.id === id ? { ...review, response: response.text, showResponseInput: false } : review
        ));
        setResponse({ id: null, text: "" });
    };

    const toggleResponseInput = (id) => {
        setReviews(reviews.map(review => 
            review.id === id ? { ...review, showResponseInput: !review.showResponseInput } : review
        ));
    };

    return (
        <Box mt={4}>
            <HStack spacing={4} align="center">
                <Text fontSize="4xl" fontWeight="bold">{averageRating}</Text>
                <VStack align="flex-start">
                    <HStack>
                        {[...Array(Math.floor(averageRating))].map((_, i) => (
                            <Icon key={i} as={FaStar} color="orange.400" />
                        ))}
                        {averageRating % 1 !== 0 && <Icon as={FaStar} color="gray.300" />}
                    </HStack>
                    <Text fontSize="sm">{reviews.length} review(s)</Text>
                </VStack>
                <Button colorScheme="blue" variant="outline" size="sm" onClick={() => setIsWritingReview(true)}>
                    Write Review
                </Button>
            </HStack>

            <Box mt={4}>
                <VStack spacing={2} align="stretch">
                    {[5, 4, 3, 2, 1].map((star) => (
                        <HStack key={star} justify="space-between">
                            <Text>Stars {star}</Text>
                            <Progress value={(ratingsCount[star] / reviews.length) * 100} size="sm" colorScheme="blue" w="70%" />
                            <Text>{ratingsCount[star]}</Text>
                        </HStack>
                    ))}
                </VStack>
            </Box>

            <Box mt={6}>
                {reviews.map((review) => (
                    <Box key={review.id} mt={4}>
                        <HStack>
                            {[...Array(review.rating)].map((_, i) => (
                                <Icon key={i} as={FaStar} color="orange.400" />
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                                <Icon key={i} as={FaStar} color="gray.300" />
                            ))}
                        </HStack>
                        <Text mt={2} fontWeight="bold">{review.comment}</Text>
                        <Text mt={2}>by {review.owner}</Text>
                        {review.response && (
                            <Box mt={2} ml={4} p={2} borderWidth="1px" borderRadius="md">
                                <Text fontWeight="bold">Response:</Text>
                                <Text>{review.response}</Text>
                            </Box>
                        )}
                        <Button variant="link" onClick={() => toggleResponseInput(review.id)}>
                            Phản hồi
                        </Button>
                        {review.showResponseInput && (
                            <>
                                <Textarea
                                    placeholder="Write your response here..."
                                    value={response.id === review.id ? response.text : ""}
                                    onChange={(e) => setResponse({ id: review.id, text: e.target.value })}
                                    mt={2}
                                />
                                <Button colorScheme="blue" onClick={() => handleResponseSubmit(review.id)} mt={2}>
                                    Submit Response
                                </Button>
                            </>
                        )}
                        {review.id < reviews.length && <Divider mt={4} />}
                    </Box>
                ))}
            </Box>

            {isWritingReview && (
                <Box mt={6}>
                    <Text fontSize="lg" fontWeight="bold">Write a Review</Text>
                    <HStack spacing={4} mt={2}>
                        <Text>Rating:</Text>
                        <HStack>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Icon 
                                    key={star} 
                                    as={FaStar} 
                                    color={newReview.rating >= star ? "orange.400" : "gray.300"} 
                                    onClick={() => setNewReview({ ...newReview, rating: star })} 
                                    cursor="pointer"
                                />
                            ))}
                        </HStack>
                    </HStack>
                    <Textarea
                        placeholder="Write your comment here..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        mt={2}
                    />
                    <Button colorScheme="blue" onClick={handleSubmit} mt={4}>
                        Submit Review
                    </Button>
                    <Button variant="outline" onClick={() => setIsWritingReview(false)} mt={4} ml={2}>
                        Cancel
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default Reviews;
