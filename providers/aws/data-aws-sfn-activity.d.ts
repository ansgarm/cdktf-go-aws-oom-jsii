import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSfnActivityConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sfn_activity.html#name DataAwsSfnActivity#name}.
     */
    readonly name?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/sfn_activity.html aws_sfn_activity}.
 */
export declare class DataAwsSfnActivity extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sfn_activity.html aws_sfn_activity} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsSfnActivityConfig);
    get arn(): string;
    get creationDate(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
