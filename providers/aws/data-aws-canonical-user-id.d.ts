import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCanonicalUserIdConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/canonical_user_id.html aws_canonical_user_id}.
 */
export declare class DataAwsCanonicalUserId extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/canonical_user_id.html aws_canonical_user_id} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsCanonicalUserIdConfig);
    get displayName(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
