import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCallerIdentityConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/caller_identity.html aws_caller_identity}.
 */
export declare class DataAwsCallerIdentity extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/caller_identity.html aws_caller_identity} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsCallerIdentityConfig);
    get accountId(): string;
    get arn(): string;
    get id(): string;
    get userId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
