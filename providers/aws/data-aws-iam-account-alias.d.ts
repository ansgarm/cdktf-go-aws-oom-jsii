import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamAccountAliasConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias}.
 */
export declare class DataAwsIamAccountAlias extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsIamAccountAliasConfig);
    get accountAlias(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
