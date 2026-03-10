import React, { useMemo, useState } from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import EmptyState from '../components/EmptyState'
import ConversationItem from '../components/ConversationItem'
import FormComponent from '../components/FormComponent'
import Message from '../components/Message'

const substitutions = {
  egg: ['1/4 cup unsweetened applesauce', '1 tbsp ground flaxseed + 3 tbsp water'],
  butter: ['equal amount margarine', 'equal amount coconut oil'],
  milk: ['equal amount soy milk', 'equal amount oat milk'],
  sugar: ['3/4 amount honey', '3/4 amount maple syrup'],
  flour: ['1:1 all-purpose gluten-free flour blend', 'almond flour (use slightly less)'],
  'baking powder': ['1/4 tsp baking soda + 1/2 tsp cream of tartar per 1 tsp'],
  'baking soda': ['4 tsp baking powder per 1 tsp'],
  buttermilk: ['1 cup milk + 1 tbsp lemon juice or vinegar'],
  oil: ['equal amount melted butter', 'equal amount applesauce for moist bakes'],
  'vanilla extract': ['equal amount maple syrup', '1/2 amount almond extract'],
}

const recipeKeywords = [
  'full recipe',
  'recipe',
  'how to cook',
  'cooking instructions',
  'instructions',
  'steps',
  'preheat',
  'bake for',
  'cook for',
  'method',
]

const substitutionKeywords = [
  'substitute',
  'replacement',
  'replace',
  'instead of',
  'alternative',
  'swap',
  'missing',
  'out of',
  'without',
]

function HomeScreen() {
  const [input, setInput] = useState('')
  const [chat, setChat] = useState([])

  const knownIngredients = useMemo(() => Object.keys(substitutions), [])

  const findIngredient = (text) => {
    const lowerText = text.toLowerCase()
    return knownIngredients.find((ingredient) => lowerText.includes(ingredient))
  }

  const isRecipeRequest = (text) => {
    const lowerText = text.toLowerCase()
    return recipeKeywords.some((word) => lowerText.includes(word))
  }

  const isSubstitutionRequest = (text) => {
    const lowerText = text.toLowerCase()
    return substitutionKeywords.some((word) => lowerText.includes(word)) || !!findIngredient(text)
  }

  const getAssistantReply = (text) => {
    if (isRecipeRequest(text)) {
      return 'I can only help with food substitutions. I can’t provide full recipes or cooking instructions, but I can suggest ingredient swaps.'
    }

    if (!isSubstitutionRequest(text)) {
      return 'I only answer food substitution questions. Try asking something like: “What can I use instead of eggs?”'
    }

    const ingredient = findIngredient(text)

    if (!ingredient) {
      return 'Tell me the missing ingredient, and I’ll suggest substitution options.'
    }

    return `If you are out of ${ingredient}, try: ${substitutions[ingredient].join(' or ')}.`
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const trimmedInput = input.trim()
    if (!trimmedInput) {
      return
    }

    const userMessage = { role: 'user', message: trimmedInput }
    const assistantMessage = {
      role: 'assistant',
      message: getAssistantReply(trimmedInput),
    }

    setChat((prevChat) => [...prevChat, userMessage, assistantMessage])
    setInput('')
  }

  return (
    <div>
      <h1>Recipe Ingredient Swapper</h1>
      <Message variant="info">
        This assistant only provides food ingredient substitutions.
      </Message>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              {chat.length === 0 ? <EmptyState /> : null}
              {chat.map((item, index) => (
                <ConversationItem
                  key={`${item.role}-${index}`}
                  role={item.role}
                  message={item.message}
                />
              ))}

              <Form onSubmit={submitHandler} className="mt-3">
                <FormComponent
                  controlId="chatInput"
                  label="Ask for a substitution"
                  type="text"
                  placeholder="Example: What can I use instead of buttermilk?"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
                <Button type="submit" variant="primary">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default HomeScreen
