import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDbEventCategoriesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html#source_type DataAwsDbEventCategories#source_type}.
     */
    readonly sourceType?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html aws_db_event_categories}.
 */
export declare class DataAwsDbEventCategories extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_event_categories.html aws_db_event_categories} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsDbEventCategoriesConfig);
    get eventCategories(): string[];
    get id(): string;
    private _sourceType?;
    get sourceType(): string;
    set sourceType(value: string);
    resetSourceType(): void;
    get sourceTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
