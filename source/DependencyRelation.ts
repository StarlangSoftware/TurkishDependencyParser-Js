export class DependencyRelation {

    protected toWord: number

    /**
     * Constructor for a {@link DependencyRelation}. Takes toWord as a parameter and sets the corresponding attribute.
     * @param toWord Index of the word in the sentence that dependency relation is related
     */
    constructor(toWord: number) {
        this.toWord = toWord
    }

    /**
     * Accessor for toWord attribute
     * @return toWord attribute value
     */
    to(): number{
        return this.toWord
    }
}