import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EbsEncryptionByDefaultConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html#enabled EbsEncryptionByDefault#enabled}.
     */
    readonly enabled?: boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default}.
 */
export declare class EbsEncryptionByDefault extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_encryption_by_default.html aws_ebs_encryption_by_default} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: EbsEncryptionByDefaultConfig);
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
